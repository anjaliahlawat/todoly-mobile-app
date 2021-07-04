import React, { ReactElement } from "react";
import { TextInput, View } from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import defaultStyles from "../../config/styles";

type AppTextInputProps = {
  icon?: any;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  value: string;
  width?: string;
};

function AppTextInput({
  icon,
  width = "100%",
}: AppTextInputProps): ReactElement {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
      />
    </View>
  );
}

export default AppTextInput;
