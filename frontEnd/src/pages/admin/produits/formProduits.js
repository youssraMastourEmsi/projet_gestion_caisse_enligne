import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormProduitPage = (props) => {
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
        name: location.state.name,
        description: location.state.description,
        prix: location.state.price,
        qte: location.state.Qte,
        image: location.state.image,
      }
    }
    return {
      name: '',
      description: '',
      prix: '',
      qte: '',
      image: '',
    }
  }

  return (
    <div style={{ width: '100%', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
      <Formik
        initialValues={initialValues()}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Nom Produit requis'),
          description: Yup.string().required('Description requis'),
          prix: Yup.string().required('Prix requis'),
          qte: Yup.string().required('Qantité requis'),
          image: Yup.string().required('Image requis'),
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
              <label htmlFor="name">Nom Produit</label>
              <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
              <ErrorMessage name="name" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group" style={{ marginTop: '20px', }}>
              <label htmlFor="description">Description</label>
              <Field name="description" type="text" as="textarea" className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')} />
              <ErrorMessage name="description" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group" style={{ marginTop: '20px', }}>
              <label htmlFor="prix">Prix</label>
              <Field name="prix" type="text" className={'form-control' + (errors.prix && touched.prix ? ' is-invalid' : '')} />
              <ErrorMessage name="prix" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group" style={{ marginTop: '20px', }}>
              <label htmlFor="qte">Quantité</label>
              <Field name="qte" type="text" className={'form-control' + (errors.qte && touched.qte ? ' is-invalid' : '')} />
              <ErrorMessage name="qte" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group" style={{ marginTop: '20px', }}>
              <label htmlFor="image">Image</label>
              <Field name="image" type="text" className={'form-control' + (errors.image && touched.image ? ' is-invalid' : '')} />
              <ErrorMessage name="image" component="div" className="invalid-feedback" />
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

export default FormProduitPage;
