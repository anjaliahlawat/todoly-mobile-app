import React, { ReactElement } from "react";
import { Text, TouchableOpacity } from "react-native";

import colors from "../../config/colors";
import styles from "./styles";

type ButtonProps = {
  title?: string;
  color?: keyof typeof colors;
  onPress: () => void;
}

function AppButton({ title, onPress, color = "primary" }: ButtonProps): ReactElement {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title} </Text>
    </TouchableOpacity>
  );
}

export default AppButton;
