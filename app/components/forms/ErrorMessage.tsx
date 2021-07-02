import React, { ReactElement } from "react";
import { FormikErrors } from "formik";

import AppText from "../AppText/AppText";
import errorStyles from "./styles";

type ErrorMessageProps = {
  error: any,
  visible: any,
}

function ErrorMessage({ error, visible }: ErrorMessageProps): ReactElement | null {
  if (!visible || !error) return null;
  return <AppText style={errorStyles.error}>{error}</AppText>;
}

export default ErrorMessage;
