import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormAgentPage = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
  }, []);

  const isEditing = () => {
    if(params.id) {
      return true;
    }
    return false;
  }

  const initialValues = () => {
    if(isEditing()) {
      return {
        firstname: location.state.firstname,
        lastname: location.state.lastname,
        email: location.state.email,
        password: location.state.password,
        role: 'agent',
      }
    }
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      role: 'agent',
    }
  }

  return (
    <div style={{ width: '100%', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
      <Formik
        initialValues={initialValues()}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().required('Prénom requis'),
          lastname: Yup.string().required('Nom requis'),
          email: Yup.string().required('Email requis'),
          password: Yup.string().required('Mot de passe requis'),
        })}
        enableReintialize={true}
        onSubmit={fields => {
          console.log(fields);
          // navigate("/");
        }}
        render={({ errors, status, touched }) => (
          <Form
            style={{
              padding: '30px',
              borderRadius: '15px',
              backgroundColor: 'rgba(255, 255, 255, .7)',
              boxShadow: '2px 2px 25px rgb(0 0 0 / 10%)',
              width: '70%',
            }}
          >
            <div className="form-group" style={{ marginTop: '20px', }}>
              <label htmlFor="firstname">Prénom</label>
              <Field name="firstname" type="text" className={'form-control' + (errors.firstname && touched.firstname ? ' is-invalid' : '')} />
              <ErrorMessage name="firstname" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group" style={{ marginTop: '20px', }}>
              <label htmlFor="lastname">Nom</label>
              <Field name="lastname" type="text" className={'form-control' + (errors.lastname && touched.lastname ? ' is-invalid' : '')} />
              <ErrorMessage name="lastname" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group" style={{ marginTop: '20px', }}>
              <label htmlFor="email">Email</label>
              <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group" style={{ marginTop: '20px', }}>
              <label htmlFor="password">Mot de passe</label>
              <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group" style={{ display: "flex", justifyContent: 'center', }}>
              <button type="reset" className="btn" style={{ backgroundColor: 'black', marginTop: '20px', marginRight: '20px', color: 'white', }}>Réinitialiser</button>
              <button type="submit" className="btn" style={{ backgroundColor: '#665eff', marginTop: '20px', color: 'white', }}>Ajouter</button>
            </div>
          </Form>
        )}
      />
    </div>
  );
};

export default FormAgentPage;
