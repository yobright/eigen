import NavigatorIOS from "lib/utils/__legacy_do_not_use__navigator-ios-shim"
import React from "react"
import { View } from "react-native"
import { ConnectedOverview as Overview } from "../Screens/Overview"

export const ConsignmentsSubmissionForm: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigatorIOS initialRoute={{ component: Overview }} />
    </View>
  )
}
