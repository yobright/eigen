import { captureMessage } from "@sentry/react-native"
import { SavedSearchBanner_me } from "__generated__/SavedSearchBanner_me.graphql"
import { SavedSearchBannerCreateSavedSearchMutation } from "__generated__/SavedSearchBannerCreateSavedSearchMutation.graphql"
import { SavedSearchBannerDeleteSavedSearchMutation } from "__generated__/SavedSearchBannerDeleteSavedSearchMutation.graphql"
import { SavedSearchBannerQuery, SearchCriteriaAttributes } from "__generated__/SavedSearchBannerQuery.graphql"
import { FilterParams, prepareFilterParamsForSaveSearchInput } from "lib/Components/ArtworkFilter/ArtworkFilterHelpers"
import { useNotification } from 'lib/Components/Notification/notificationHooks'
import { LegacyNativeModules } from "lib/NativeModules/LegacyNativeModules"
import { defaultEnvironment } from "lib/relay/createEnvironment"
import { PushAuthorizationStatus } from "lib/Scenes/MyProfile/MyProfilePushNotifications"
import { Button, Flex, Text } from "palette"
import React, { useState } from "react"
import { Alert, Linking, Platform } from "react-native"
import { commitMutation, createRefetchContainer, graphql, QueryRenderer, RelayRefetchProp } from "react-relay"

interface SavedSearchBannerProps {
  me?: SavedSearchBanner_me | null
  artistId: string
  attributes: SearchCriteriaAttributes
  loading?: boolean
  relay: RelayRefetchProp
}

export const SavedSearchBanner: React.FC<SavedSearchBannerProps> = ({ me, attributes, loading, relay }) => {
  const [saving, setSaving] = useState(false)
  const notification = useNotification()
  const enabled = !!me?.savedSearch?.internalID
  const inProcess = loading || saving

  // doing refetch as opposed to updating `enabled` in state with savedSearch internalID
  // because change in applied filters will update the `me` prop in the QueryRenderer
  const doRefetch = () => {
    relay.refetch(
      { criteria: attributes },
      null,
      () => {
        setSaving(false)
      },
      { force: true }
    )
  }

  const createSavedSearch = () => {
    setSaving(true)
    commitMutation<SavedSearchBannerCreateSavedSearchMutation>(relay.environment, {
      mutation: graphql`
        mutation SavedSearchBannerCreateSavedSearchMutation($input: CreateSavedSearchInput!) {
          createSavedSearch(input: $input) {
            savedSearchOrErrors {
              ... on SearchCriteria {
                internalID
              }
            }
          }
        }
      `,
      variables: {
        input: {
          attributes,
        },
      },
      onCompleted: () => {
        doRefetch()
        notification.show({
          title: "Your alert has been set.",
          message: "We will send you a push notification once new works are added.",
          placement: "top",
        })
      },
      onError: () => {
        setSaving(false)
      },
    })
  }

  const deleteSavedSearch = () => {
    setSaving(true)
    commitMutation<SavedSearchBannerDeleteSavedSearchMutation>(relay.environment, {
      mutation: graphql`
        mutation SavedSearchBannerDeleteSavedSearchMutation($input: DeleteSavedSearchInput!) {
          deleteSavedSearch(input: $input) {
            savedSearchOrErrors {
              ... on SearchCriteria {
                internalID
              }
            }
          }
        }
      `,
      variables: {
        input: {
          searchCriteriaID: me!.savedSearch!.internalID,
        },
      },
      onCompleted: () => {
        doRefetch()
        notification.show({
          title: "Your alert has been removed.",
          message: "Don't worry, you can always create a new one.",
          placement: "top",
        })
      },
      onError: () => {
        setSaving(false)
      },
    })
  }

  const handleSaveSearchFiltersPress = () => {
    if (inProcess) {
      return
    }
    const executeSaveSearch = () => {
      if (enabled) {
        deleteSavedSearch()
      } else {
        createSavedSearch()
      }
    }
    if (Platform.OS === "android") {
      // TODO:- When android Push notification setup is ready add check for permission
      // NotificationManagerCompat.from(getReactApplicationContext()).areNotificationsEnabled();
      executeSaveSearch()
      return
    }
    LegacyNativeModules.ARTemporaryAPIModule.fetchNotificationPermissions((_, result: PushAuthorizationStatus) => {
      switch (result) {
        case PushAuthorizationStatus.Authorized:
          return executeSaveSearch()
        case PushAuthorizationStatus.Denied:
          return Alert.alert(
            "Turn on notifications",
            'To receive push notification alerts from Artsy on new works by this artist, you\'ll need to enable them in your iOS Settings. Tap Notifications, and then toggle "Allow Notifications" on.',
            [
              {
                text: "Settings",
                onPress: () => Linking.openURL("App-prefs:NOTIFICATIONS_ID"),
              },
              {
                text: "Cancel",
                style: "cancel",
              },
            ]
          )
        case PushAuthorizationStatus.NotDetermined:
          return Alert.alert(
            "Turn on notifications",
            "Artsy needs your permission to send push notification alerts on new works by this artist.",
            [
              {
                text: "Proceed",
                onPress: () => LegacyNativeModules.ARTemporaryAPIModule.requestNotificationPermissions(),
              },
              {
                text: "Cancel",
                style: "cancel",
              },
            ]
          )
        default:
          return
      }
    })
  }

  return (
    <Flex
      backgroundColor="white"
      flexDirection="row"
      mx={-2}
      px={2}
      py={11}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text variant="small" color="black">
        New works alert for this search
      </Text>
      <Button
        variant={enabled ? "secondaryOutline" : "primaryBlack"}
        onPress={handleSaveSearchFiltersPress}
        size="small"
        loading={inProcess}
        longestText="Disable"
        haptic
      >
        {enabled ? "Disable" : "Enable"}
      </Button>
    </Flex>
  )
}

export const SavedSearchBannerRefetchContainer = createRefetchContainer(
  SavedSearchBanner,
  {
    me: graphql`
      fragment SavedSearchBanner_me on Me @argumentDefinitions(criteria: { type: "SearchCriteriaAttributes" }) {
        savedSearch(criteria: $criteria) {
          internalID
        }
      }
    `,
  },
  graphql`
    query SavedSearchBannerRefetchQuery($criteria: SearchCriteriaAttributes) {
      me {
        ...SavedSearchBanner_me @arguments(criteria: $criteria)
      }
    }
  `
)

export const SavedSearchBannerQueryRender: React.FC<{ filters: FilterParams; artistId: string }> = ({
  filters,
  artistId,
}) => {
  const input = prepareFilterParamsForSaveSearchInput(filters)
  const attributes: SearchCriteriaAttributes = {
    artistID: artistId,
    ...input,
  }

  return (
    <QueryRenderer<SavedSearchBannerQuery>
      environment={defaultEnvironment}
      query={graphql`
        query SavedSearchBannerQuery($criteria: SearchCriteriaAttributes!) {
          me {
            ...SavedSearchBanner_me @arguments(criteria: $criteria)
          }
        }
      `}
      render={({ props, error }) => {
        if (error) {
          if (__DEV__) {
            console.error(error)
          } else {
            captureMessage(error.stack!)
          }
        }

        return (
          <SavedSearchBannerRefetchContainer
            me={props?.me ?? null}
            loading={props === null && error === null}
            attributes={attributes}
            artistId={artistId}
          />
        )
      }}
      variables={{
        criteria: attributes,
      }}
    />
  )
}
