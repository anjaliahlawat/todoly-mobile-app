import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 2,
    padding: 20,
  },
  captureContainer: {
    flex: 1,
    justifyContent: "center",
  },
  captureInputBox: {
    flex: 2,
    padding: 20,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: colors.medium,
    fontSize: 26,
    fontWeight: "700",
  },
});

export default styles;
