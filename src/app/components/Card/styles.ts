import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    flexDirection: "row",
    padding: 10,
    maxHeight: 90,
  },
  cardDetails: {
    padding: 20,
    flex: 3,
  },
  cardIndexBox: {
    backgroundColor: colors.primary,
    margin: 7,
    flex: 1,
    borderRadius: 10,
    paddingTop: 8,
  },
  cardIndex: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 25,
    textAlign: "center",
  },
  title: {
    color: colors.cardText,
    fontSize: 20,
  },
});

export default styles;
