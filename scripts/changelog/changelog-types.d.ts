export type ParseResult =
  | { type: "error" } // for when no changelog-related stuff is found
  | { type: "no_changes" } // for when we add #nochangelog hashtag
  | {
      type: "changes"
      crossPlatformUserFacingChanges: string[]
      iOSUserFacingChanges: string[]
      androidUserFacingChanges: string[]
      devChanges: string[]
    }
