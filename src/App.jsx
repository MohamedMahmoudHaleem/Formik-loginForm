import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import  './App.css'

const validationSchema = Yup.object({
  username: Yup.string().min(3, "UserName must be at least 3 characters"),
  email: Yup.string().email("invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "password must be at least 6 characters")
    .required("Required"),
});

const  SignUpForm = ()=> {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log("Form data : ", values);
    setTimeout(() => {
      alert("form submitted successdully");
      setSubmitting(false);
      resetForm();
    }, 1000);
  };
  return (
    <div className="form-container">
      <h1>Sign Form</h1>
      <Formik
        initialValues={{ username:'',email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("Form data ", values)}
      >
        {({isSubmitting,resetForm }) => (
          <Form className="form">
             <div className="form-field">
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-buttons">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={() => resetForm()}
              >
                Reset
              </button>
            </div>
        </Form>
        )}
        
      </Formik>
    </div>
  );
}

export default SignUpForm;
