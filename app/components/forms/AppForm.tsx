import React, { ReactElement } from "react";
import { Formik, FormikProps } from "formik";

type AppFormProps = {
  initialValues: {};
  onSubmit: ({}: any) => Promise<any>;
  validationSchema: {};
  children: Array<ReactElement>;
}

function AppForm({ initialValues, onSubmit, validationSchema, children }: AppFormProps): ReactElement {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
