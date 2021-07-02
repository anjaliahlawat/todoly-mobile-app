import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../Button/Button";

function SubmitButton({ title }: { title: string }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
