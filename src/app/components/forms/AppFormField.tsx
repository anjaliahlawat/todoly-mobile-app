import React, { ReactElement } from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput/AppTextInput";
import ErrorMessage from "./ErrorMessage";

type AppFormFieldProps = {
  name: string;
  width?: string;
  autoCapitalize?: string;
  autoCorrect?: boolean;
  icon?: any;
  keyboardType?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
};

function AppFormField({
  name,
  width,
  ...otherProps
}: AppFormFieldProps): ReactElement {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext<any>();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: string) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
