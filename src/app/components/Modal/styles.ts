import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOrganize: {
    backgroundColor: colors.primary,
    marginTop: 15,
  },
  buttonClose: {
    backgroundColor: colors.secondary,
    marginTop: 10,
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    margin: 30,
    maxHeight: 265,
    padding: 15,
  },
  modalBody: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    height: 100,
    maxHeight: 150,
    backgroundColor: colors.primaryLight,
  },
  modalText: {
    fontSize: 20,
    color: colors.cardText,
    textAlign: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
