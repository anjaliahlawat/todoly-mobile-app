import React, { ReactElement } from "react";
import { SafeAreaView, StyleProp, View, ViewStyle } from "react-native";

import styles from "./styles";

type ScreenProps = {
  children: JSX.Element;
  style?: StyleProp<ViewStyle>;
};

function Screen({ children, style }: ScreenProps): ReactElement {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;
