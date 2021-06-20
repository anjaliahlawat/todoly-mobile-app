import React from "react";
import { PropTypes } from "prop-types";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput/AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

AppFormField.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
};

export default AppFormField;
