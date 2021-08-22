import React, { ReactElement } from "react";
import { ImageBackground, View } from "react-native";
import AppButton from "../../components/Button/Button";
import Screen from "../../components/screen/Screen";
import styles from "./styles";

const background = require("../../../../assets/background.jpg");

function MainScreen({ navigation }: { navigation?: any }): ReactElement {
  return (
    <Screen>
      <ImageBackground
        blurRadius={1}
        style={styles.background}
        source={background}
      >
        <View style={styles.buttonContainer}>
          <AppButton
            title="Capture"
            onPress={() => navigation.navigate("Capture")}
          />
          <AppButton
            title="Organize"
            onPress={() => navigation.navigate("CaptureList")}
            color="secondary"
          />
        </View>
      </ImageBackground>
    </Screen>
  );
}

export default MainScreen;
