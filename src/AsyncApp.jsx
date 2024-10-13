import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import './App.css'; // Your CSS styles

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const SignUpForm = () => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      console.log("Sending form data to the server:", values);

      // Make a POST request to the server
      const response = await fetch("https://example.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON format
        },
        body: JSON.stringify(values), // Convert form data to JSON
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const data = await response.json(); // Parse server response
      console.log("Server response:", data);

      alert("Form submitted successfully!");
      resetForm(); // Reset the form fields
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setSubmitting(false); // Stop the button spinner
    }
  };

  return (
    <div className="form-container">
      <h1>Signup Form</h1>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="form">
            {/* Username Field */}
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

            {/* Email Field */}
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

            {/* Password Field */}
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

            {/* Buttons */}
            <div className="form-buttons">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
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
};

export default SignUpForm;
