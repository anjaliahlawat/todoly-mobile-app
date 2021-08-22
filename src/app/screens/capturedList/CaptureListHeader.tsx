import React, { ReactElement } from "react";
import { View } from "react-native";
import AppText from "../../components/AppText/AppText";
import styles from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CapturedListHeader({ route }: any): ReactElement {
  return (
    <View>
      <AppText style={styles.headerText}>Capture List</AppText>
      <AppText
        style={styles.subHeaderText}
      >{`You have ${route.params.count} tasks in your list`}</AppText>
    </View>
  );
}

export default CapturedListHeader;
