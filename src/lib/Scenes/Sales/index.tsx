import { Sales_me } from "__generated__/Sales_me.graphql"
import { Sales_sales } from "__generated__/Sales_sales.graphql"
import { SalesQueryRendererQuery } from "__generated__/SalesQueryRendererQuery.graphql"
import { PageWithSimpleHeader } from "lib/Components/PageWithSimpleHeader"
import { Stack } from "lib/Components/Stack"
import { defaultEnvironment } from "lib/relay/createEnvironment"
import { extractNodes } from "lib/utils/extractNodes"
import renderWithLoadProgress from "lib/utils/renderWithLoadProgress"
import React from "react"
import { RefreshControl, ScrollView } from "react-native"
import { createRefetchContainer, graphql, QueryRenderer, RelayRefetchProp } from "react-relay"
import LotsByFollowedArtists from "./Components/LotsByFollowedArtists"
import { SaleList } from "./Components/SaleList"
import { ZeroState } from "./Components/ZeroState"

interface Props {
  relay: RelayRefetchProp
  sales: Sales_sales
  me: Sales_me
}

interface State {
  isRefreshing: boolean
}

class Sales extends React.Component<Props, State> {
  state = {
    isRefreshing: false,
  }

  handleRefresh = () => {
    this.setState({ isRefreshing: true })
    this.props.relay.refetch(
      {},
      {},
      (error) => {
        if (error) {
          console.error("Sales/index.tsx", error.message)
        }
        this.setState({ isRefreshing: false })
      },
      { force: true }
    )
  }

  render() {
    const sales = extractNodes(this.props.sales)

    if (sales.length === 0) {
      return <ZeroState />
    }

    const liveAuctions = sales.filter((a) => !!a.live_start_at)
    const timedAuctions = sales.filter((a) => !a.live_start_at)

    return (
      <PageWithSimpleHeader title="Auctions">
        <ScrollView
          refreshControl={<RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.handleRefresh} />}
        >
          <Stack py={2} spacing={3}>
            <LotsByFollowedArtists title="Lots by Artists You Follow" me={this.props.me} />
            <SaleList title="Current Live Auctions" sales={liveAuctions} />
            <SaleList title="Current Timed Auctions" sales={timedAuctions} />
          </Stack>
        </ScrollView>
      </PageWithSimpleHeader>
    )
  }
}

export const SalesFragmentContainer = createRefetchContainer(
  Sales,
  {
    sales: graphql`
      fragment Sales_sales on SaleConnection {
        edges {
          node {
            ...SaleListItem_sale
            live_start_at: liveStartAt
          }
        }
      }
    `,
    me: graphql`
      fragment Sales_me on Me {
        ...LotsByFollowedArtists_me
        email
      }
    `,
  },
  graphql`
    query SalesQuery {
      sales: salesConnection(live: true, isAuction: true, first: 100, sort: TIMELY_AT_NAME_ASC) {
        ...Sales_sales
      }
      me {
        ...Sales_me
      }
    }
  `
)

export const SalesQueryRenderer: React.FC = () => {
  return (
    <QueryRenderer<SalesQueryRendererQuery>
      environment={defaultEnvironment}
      query={graphql`
        query SalesQueryRendererQuery {
          sales: salesConnection(live: true, isAuction: true, first: 100, sort: TIMELY_AT_NAME_ASC) {
            ...Sales_sales
          }
          me {
            ...Sales_me
          }
        }
      `}
      variables={{}}
      render={renderWithLoadProgress(SalesFragmentContainer)}
    />
  )
}
