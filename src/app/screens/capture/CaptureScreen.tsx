import React, { ReactElement, useState } from "react";
import { Text, View } from "react-native";

import AppTextArea from "../../components/AppTextArea/AppTextArea";
import AppButton from "../../components/Button/Button";
import Screen from "../../components/screen/Screen";
import styles from "./styles";

function CaptureScreen({ navigation }: { navigation?: any }): ReactElement {
  const [value, setValue] = useState<string>();

  const saveCapturedData = () => {
    console.log(value);
    navigation.navigate("Main");
  };

  return (
    <Screen>
      <View style={styles.captureContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Capture</Text>
        </View>
        <View style={styles.captureInputBox}>
          <AppTextArea
            onChangeText={(e) => setValue(e.target.value)}
            numberOfLines={8}
            value={value}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="Done" onPress={saveCapturedData} />
          <AppButton
            title="Back"
            onPress={() => navigation.navigate("Main")}
            color="secondary"
          />
        </View>
      </View>
    </Screen>
  );
}

export default CaptureScreen;
