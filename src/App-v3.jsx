import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("invalid email address").required("Required"),
  passwor: Yup.string()
    .min(6, "password must be at least 6 characters")
    .required("Required"),
});
function SignUpForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Form data ", values)}
    >
      <Form>
        <label htmlFor="email">email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Password</label>
        <Field type="password" name="email" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
}

export default SignUpForm;
