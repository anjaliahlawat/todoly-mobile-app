import { StyleSheet } from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import Constants from "expo-constants";

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default styles;
