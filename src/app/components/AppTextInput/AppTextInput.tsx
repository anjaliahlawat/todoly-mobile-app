import React, { ReactElement } from "react";
import { TextInput, View } from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import defaultStyles from "../../config/styles";

type AppTextInputProps = {
  autoCapitalize: string;
  autoCorrect: boolean;
  icon?: any;
  keyboardType?: string;
  name?: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  textContentType?: string;
  value: string;
  width?: string;
};

function AppTextInput({
  icon,
  width = "100%",
  onBlur,
  onChangeText,
  value,
  secureTextEntry,
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
        onBlur={onBlur}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </View>
  );
}

export default AppTextInput;
