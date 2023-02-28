import { Formik } from "formik";
import React from "react";
import Spinner from "react-bootstrap/Spinner";
import * as Yup from "yup";

const SignUp = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 4000);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Must be atleast 3 character long")
            .required("Name is Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          phone: Yup.string()
            .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,"Invalid phone number")
            .required("Required"),
          password: Yup.string()
            .min(8, "Very short password")
            .required("Required"),
        })}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="container m-4"
            autoComplete="off"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Full name"
                className="form-control mb-2"
              />
              {errors.name && errors.name}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="E-mail"
                className="form-control mb-2"
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                placeholder="Phone Number"
                className="form-control mb-2"
              />
              {errors.phone && touched.phone && errors.phone}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                className="form-control mb-2"
              />
              {errors.password && touched.password && errors.password}
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            {isSubmitting && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
