import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    alignItems: "center",
    padding: 30,
    position: "absolute",
    top: 100,
  },
  tagline: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.primary,
    paddingVertical: 20,
  },
});

export default styles;
