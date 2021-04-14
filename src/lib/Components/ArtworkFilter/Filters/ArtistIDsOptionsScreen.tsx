import { StackScreenProps } from "@react-navigation/stack"
import { ArtworksFiltersStore } from "lib/Components/ArtworkFilter/ArtworkFilterStore"
import React from "react"
import { ArtworkFilterNavigationStack } from "lib/Components/ArtworkFilter"
import { ArtistIDsArtworksOptionsScreen } from "./ArtistIDsArtworksOptions"
import { ArtistIDsSaleArtworksOptionsScreen } from "./ArtistIDsSaleArtworksOptionsScreen"

export const ArtistIDsOptionsScreen = (
  props: StackScreenProps<ArtworkFilterNavigationStack, "ArtistIDsOptionsScreen">
) => {
  const filterType = ArtworksFiltersStore.useStoreState((state) => state.filterType)

  if (filterType === "saleArtwork") {
    return <ArtistIDsSaleArtworksOptionsScreen {...props} />
  }
  return <ArtistIDsArtworksOptionsScreen {...props} />
}