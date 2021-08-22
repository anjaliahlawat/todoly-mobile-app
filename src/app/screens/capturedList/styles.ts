import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  capturedListContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 25,
    color: colors.white,
    fontWeight: "bold",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  subHeaderText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
    marginTop: 3,
  },
});

export default styles;
