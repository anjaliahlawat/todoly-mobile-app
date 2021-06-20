import React from "react";
import { PropTypes } from "prop-types";
import AppText from "../AppText/AppText";
import errorStyles from "./styles";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={errorStyles.error}>{error}</AppText>;
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
  visible: PropTypes.boolean,
};

export default ErrorMessage;
