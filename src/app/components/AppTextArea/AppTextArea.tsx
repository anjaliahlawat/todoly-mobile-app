import React, { ReactElement } from "react";
import { TextInput, View } from "react-native";

import defaultStyles from "../../config/styles";
import styles from "./styles";

type AppTextAreaProps = {
  onChangeText: (e) => void;
  // onBlur: () => void;
  value?: string;
  width?: string;
  numberOfLines?: number;
};

function AppTextArea({
  onChangeText,
  // onBlur,
  value,
  width,
  numberOfLines,
}: AppTextAreaProps): ReactElement {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        style={[defaultStyles.text]}
        onChangeText={(e) => onChangeText(e)}
        // onBlur={onBlur}
        value={value}
        multiline={true}
        numberOfLines={numberOfLines}
        placeholder={"Type something"}
      />
    </View>
  );
}

export default AppTextArea;
