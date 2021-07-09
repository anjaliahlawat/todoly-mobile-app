import React, { ReactElement } from "react";
import { ImageBackground, View, Text } from "react-native";

import AppButton from "../../components/Button/Button";
import styles from "./styles";

const background = require("../../../../assets/background.jpg");

function WelcomeScreen({ navigation }: { navigation?: any }): ReactElement {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={background}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.tagline}>Declutter your mind</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="LOGIN" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="REGISTER"
          onPress={() => navigation.navigate("Register")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
