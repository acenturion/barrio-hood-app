import React from 'react';
import styles from './FormBuy.module.scss'
import {useFormik} from "formik";
import Button from "../Button/Button";

const FormBuy = ({onSubmitForm}) => {

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Nombre requerido.';
    }

    if (!values.phone) {
      errors.phone = 'Telefono requerido.';
    }

    if (!values.email) {
      errors.email = 'Requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Ingrese un email valido.';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
    },
    validate,
    onSubmit: (values) => onSubmitForm(values),
  });

  return (
    <form className={styles.formContainer}>
      <label htmlFor="name">Nombre</label>
      <input type="text"
             name="name"
             value={formik.values.name}
             onChange={formik.handleChange}/>
      {formik.errors.name && formik.touched.name ?
        <div className={styles.messageError}>{formik.errors.name}</div> : null}

      <label htmlFor="phone">Telefono</label>
      <input type="number"
             name="phone"
             value={formik.values.phone}
             onChange={formik.handleChange}/>
      {formik.errors.phone && formik.touched.phone ?
        <div className={styles.messageError}>{formik.errors.phone}</div> : null}

      <label htmlFor="email">Email</label>
      <input type="email"
             name="email"
             value={formik.values.email}
             onChange={formik.handleChange}/>
      {formik.errors.email && formik.touched.email ?
        <div className={styles.messageError}>{formik.errors.email}</div> : null}

      <Button disabled={!(formik.isValid && formik.dirty)}
              text={'Agregar datos de contacto'}
              onClick={formik.handleSubmit}
              style={{marginTop: '2em'}}
      >
      </Button>
    </form>
  );
};

export default FormBuy;
