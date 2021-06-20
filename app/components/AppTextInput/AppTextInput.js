import React from "react";
import { PropTypes } from "prop-types";
import { TextInput, View } from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import defaultStyles from "../../config/styles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
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

AppTextInput.propTypes = {
  icon: PropTypes.string,
  width: PropTypes.string,
};

export default AppTextInput;
