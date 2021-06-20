import React from "react";
import { PropTypes } from "prop-types";
import { Formik } from "formik";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
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

AppForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.function,
  validationSchema: PropTypes.object,
  children: PropTypes.object,
};

export default AppForm;
