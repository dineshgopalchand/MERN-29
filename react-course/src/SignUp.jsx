import { Formik } from "formik";
import React from "react";

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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.name) {
            errors.name = "Required";
          } else if (
           values.name.length<3
          ) {
            errors.name = "Invalid name";
          }
          if (!values.phone) {
            errors.phone = "Required";
          } else if (
            !/^[1-9][0-9]{9,10}$/i.test(
              values.phone
            )
          ) {
            errors.phone = "Invalid phone";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Short password";
          }
          return errors;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="container m-4">
            <div className="form-group">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="form-control"
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
                className="form-control"
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
                className="form-control"
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
                className="form-control"
              />
              {errors.password && touched.password && errors.password}
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
