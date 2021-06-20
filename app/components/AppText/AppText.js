import React from "react";
import { PropTypes } from "prop-types";
import { Text } from "react-native";

import defaultStyles from "../../config/styles";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

AppText.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
};

export default AppText;
