import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("invalid email address").required("required"),
  password: Yup.string()
    .min(6, "password must be at least 6 charactes")
    .required("Required"),
});
function SignUpForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,

    onSubmit: (values, { resetForm }) => {
      console.log("Form data", values);
      alert("Form Submitted!");
      resetForm();
      
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        values={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <button type="submit" onSubmit={formik.handleSubmit}>ok!</button>
    </form>
  );
}

export default SignUpForm;
