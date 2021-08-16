import React, { ReactElement, useState, useContext } from "react";
import { Text, View } from "react-native";

import AppTextArea from "../../components/AppTextArea/AppTextArea";
import AppButton from "../../components/Button/Button";
import Screen from "../../components/screen/Screen";
import styles from "./styles";
import useApi from "../../hooks/useApi";
import captureApi from "../../api/capture";
import { ErrorMessage } from "../../components/forms";
import AuthContext from "../../auth/context";

function CaptureScreen({ navigation }: { navigation?: any }): ReactElement {
  const captureApiRequest = useApi(captureApi.captureTask);
  const [capturedText, setValue] = useState<string>();
  const [capturedFailed, setCapturedFailed] = useState<boolean>();
  const { user } = useContext(AuthContext) as ContextType;

  const saveCapturedData = async (): Promise<void> => {
    const formData = {
      user,
      tasks: [
        {
          type: "text",
          desc: capturedText,
        },
      ],
    };
    const result = await captureApiRequest.request(formData);
    if (!result.ok) return setCapturedFailed(true);
    setCapturedFailed(false);
    return navigation.navigate("Main");
  };

  return (
    <Screen>
      <View style={styles.captureContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Capture</Text>
        </View>
        <View style={styles.captureInputBox}>
          <AppTextArea
            onChangeText={(text) => setValue(text)}
            numberOfLines={8}
            value={capturedText}
          />
        </View>
        <ErrorMessage error="Invalid data." visible={capturedFailed} />
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
