import React from "react";
import { PropTypes } from "prop-types";
import { useFormikContext } from "formik";

import AppButton from "../Button/Button";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

SubmitButton.propTypes = {
  title: PropTypes.string,
};

export default SubmitButton;
