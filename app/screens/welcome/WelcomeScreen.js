import React from "react";
import { ImageBackground, View, Text } from "react-native";

import AppButton from "../../components/Button/Button";
import background from "../../assets/background.jpg";
import styles from "./styles";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={background}
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

export default WelcomeScreen;
