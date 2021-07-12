import React, { ReactElement } from "react";
import { Formik } from "formik";

type AppFormProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValues: RegisterProps;
  onSubmit: (opts: RegisterProps) => Promise<unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationSchema: any;
  children: Array<ReactElement>;
};

function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps): ReactElement {
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
