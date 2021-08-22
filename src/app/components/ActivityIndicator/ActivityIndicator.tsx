import React, { ReactElement } from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

import styles from "./styles";

const animation = require("../../../../assets/animations/loader.json");

function ActivityIndicator({
  visible = false,
}: {
  visible: boolean;
}): ReactElement | null {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView autoPlay loop source={animation} />
    </View>
  );
}

export default ActivityIndicator;
