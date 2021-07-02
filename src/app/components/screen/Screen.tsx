import React from "react";
import { PropTypes } from "prop-types";
import { SafeAreaView, View } from "react-native";

import styles from "./styles";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

Screen.propTypes = {
  children: PropTypes.object,
  style: PropTypes.object,
};

export default Screen;
