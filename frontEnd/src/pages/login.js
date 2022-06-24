import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { getRole, isLogin } from "../utils";

const LoginPage = ({}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin()) {
      if (getRole() == "admin") {
        navigate("/");
      }
      if (getRole() == "agent") {
        navigate("/caisse");
      }
    }
  }, []);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
        }}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Email invalide")
              .required("Email requis"),
            password: Yup.string()
              .min(5, "Mot de passe doit étre au minimum 6 caractères")
              .required("Mot de passe requis"),
          })}
          onSubmit={(fields) => {
            var user = {
              email: fields.email,
              password: fields.password,
              role: "admin",
            };
            var agent = {
              email: fields.email,
              password: fields.password,
              role: "agent",
            };
            if (fields.email.includes("admin")) {
              localStorage.setItem("user", JSON.stringify(user));
            }
            if (fields.email.includes("agent")) {
              localStorage.setItem("user", JSON.stringify(agent));
            }
            navigate("/");
          }}
          render={({ errors, status, touched }) => (
            <Form
              style={{
                padding: "30px",
                borderRadius: "15px",
                backgroundColor: "rgba(255, 255, 255, .7)",
                boxShadow: "2px 2px 25px rgb(0 0 0 / 10%)",
              }}
            >
              <div className="form-group" style={{ marginTop: "20px" }}>
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group" style={{ marginTop: "20px" }}>
                <label htmlFor="password">Mot de passe</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div
                className="form-group"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: "#665eff",
                    marginTop: "20px",
                    color: "white",
                  }}
                >
                  S'identifier
                </button>
                {/* <button type="reset" className="btn btn-secondary">Reset</button> */}
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  );
};

export default LoginPage;
