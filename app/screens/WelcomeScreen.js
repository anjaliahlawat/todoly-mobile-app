import React from "react";
import { ImageBackground, View, StyleSheet, Text } from "react-native";

import AppButton from "../components/Button/Button";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer} blurRadius={2}>
        <Text style={styles.tagline}>Declutter your mind</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="LOGIN" onPress={() => console.log("Login")} />
        <AppButton
          title="REGISTER"
          onPress={() => console.log("Register")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

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

export default WelcomeScreen;
