import React, { Component } from "react"
import { RefreshControl } from "react-native"
import { createPaginationContainer, graphql, QueryRenderer, RelayPaginationProp } from "react-relay"

import GenericGrid, { GenericGridPlaceholder } from "lib/Components/ArtworkGrids/GenericGrid"
import { ZeroState } from "lib/Components/States/ZeroState"
import { PAGE_SIZE } from "lib/data/constants"

import { Button } from "@artsy/palette"
import { Artworks_me } from "__generated__/Artworks_me.graphql"
import { FavoriteArtworksQuery } from "__generated__/FavoriteArtworksQuery.graphql"
import { StickyTabPageScrollView } from "lib/Components/StickyTabPage/StickyTabPageScrollView"
import SwitchBoard from "lib/NativeModules/SwitchBoard"
import { defaultEnvironment } from "lib/relay/createEnvironment"
import { extractNodes } from "lib/utils/extractNodes"
import { renderWithPlaceholder } from "lib/utils/renderWithPlaceholder"
import { useScreenDimensions } from "lib/utils/useScreenDimensions"

interface Props {
  me: Artworks_me
  relay: RelayPaginationProp
  onDataFetching?: (loading: boolean) => void
}

interface State {
  fetchingMoreData: boolean
  refreshingFromPull: boolean
}

export class SavedWorks extends Component<Props, State> {
  state = {
    fetchingMoreData: false,
    refreshingFromPull: false,
  }

  loadMore = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return
    }

    const updateState = (loading: boolean) => {
      this.setState({ fetchingMoreData: loading })
      if (this.props.onDataFetching) {
        this.props.onDataFetching(loading)
      }
    }

    updateState(true)
    this.props.relay.loadMore(PAGE_SIZE, error => {
      if (error) {
        // FIXME: Handle error
        console.error("SavedWorks/index.tsx", error.message)
      }
      updateState(false)
    })
  }

  handleRefresh = () => {
    this.setState({ refreshingFromPull: true })
    this.props.relay.refetchConnection(PAGE_SIZE, error => {
      if (error) {
        // FIXME: Handle error
        console.error("SavedWorks/index.tsx #handleRefresh", error.message)
      }
      this.setState({ refreshingFromPull: false })
    })
  }

  // @TODO: Implement test on this component https://artsyproduct.atlassian.net/browse/LD-563
  render() {
    const artworks = extractNodes(this.props.me.followsAndSaves?.artworks)

    if (artworks.length === 0) {
      return (
        <StickyTabPageScrollView
          refreshControl={<RefreshControl refreshing={this.state.refreshingFromPull} onRefresh={this.handleRefresh} />}
          contentContainerStyle={{ flex: 1 }}
        >
          <ZeroState
            title="You haven’t saved any works yet"
            subtitle="Tap the heart on an artwork to save for later."
            callToAction={
              <Button
                variant="secondaryOutline"
                size="large"
                onPress={() => {
                  SwitchBoard.presentNavigationViewController(this, "/")
                }}
              >
                Browse works for you
              </Button>
            }
          />
        </StickyTabPageScrollView>
      )
    }

    return (
      <StickyTabPageScrollView
        onEndReached={this.loadMore}
        style={{ paddingTop: 20 }}
        refreshControl={<RefreshControl refreshing={this.state.refreshingFromPull} onRefresh={this.handleRefresh} />}
      >
        <GenericGrid artworks={artworks} isLoading={this.state.fetchingMoreData} />
      </StickyTabPageScrollView>
    )
  }
}

const FavoriteArtworksContainer = createPaginationContainer(
  SavedWorks,
  {
    me: graphql`
      fragment Artworks_me on Me
        @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String", defaultValue: "" }) {
        # TODO: This should move into followsAndSaves
        followsAndSaves {
          artworks: artworksConnection(private: true, first: $count, after: $cursor)
            @connection(key: "GenericGrid_artworks") {
            pageInfo {
              startCursor
              endCursor
              hasPreviousPage
              hasNextPage
            }
            edges {
              node {
                ...GenericGrid_artworks
              }
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      // @ts-ignore STRICTNESS_MIGRATION
      return props.me && props.me.followsAndSaves.artworks
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      }
    },
    getVariables(_props, { count, cursor }, fragmentVariables) {
      return {
        ...fragmentVariables,
        count,
        cursor,
      }
    },
    query: graphql`
      query ArtworksQuery($count: Int!, $cursor: String) {
        me {
          ...Artworks_me @arguments(count: $count, cursor: $cursor)
        }
      }
    `,
  }
)

export const FavoriteArtworksQueryRenderer = () => {
  const screen = useScreenDimensions()
  return (
    <QueryRenderer<FavoriteArtworksQuery>
      environment={defaultEnvironment}
      query={graphql`
        query FavoriteArtworksQuery {
          me {
            ...Artworks_me
          }
        }
      `}
      variables={{
        count: 10,
      }}
      render={renderWithPlaceholder({
        Container: FavoriteArtworksContainer,
        renderPlaceholder: () => {
          return (
            <StickyTabPageScrollView scrollEnabled={false} style={{ paddingTop: 20 }}>
              <GenericGridPlaceholder width={screen.width - 40} />
            </StickyTabPageScrollView>
          )
        },
      })}
    />
  )
}
