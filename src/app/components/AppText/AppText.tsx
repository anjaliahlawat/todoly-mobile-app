import React, { ReactElement } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

import defaultStyles from "../../config/styles";

type AppTextProps = {
  children: JSX.Element;
  style: StyleProp<TextStyle>;
};

function AppText({
  children,
  style,
  ...otherProps
}: AppTextProps): ReactElement {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
