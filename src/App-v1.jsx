import React from "react";
import { useFormik } from "formik";

function SignUpForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: (values) => {
      const errors = {};
      if (!values.email) errors.email = "Required";
      else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "invalid type";
      if (!values.password) errors.password = "Required";
      return errors;
    },
    onSubmit: (values) => console.log(values),
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
      <button onSubmit={formik.handleSubmit}>ok!</button>
    </form>
  );
}

export default SignUpForm;
