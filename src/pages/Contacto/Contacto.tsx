import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import { TextField } from "formik-material-ui";
import * as yup from "yup";

const contactSchema = yup.object({
  nombre: yup.string().required("Es obligatorio"),
  email: yup
    .string()
    .email("Dirección de correo invalida")
    .required("Es obligatorio"),
  telefono: yup
    .string()
    .min(9, "Revise que el número esté escrito correctamente")
    .max(15, "Revise que el número esté escrito correctamente"),
  consulta: yup.string(),
});
const Contacto = () => {
  return (
    <div>
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          telefono: "",
          consulta: "",
        }}
        validationSchema={contactSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="nombre">Nombre</label>
          <Field name="nombre" type="text" />
          <ErrorMessage name="nombre" />

          <label htmlFor="email">Correo</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="telefono">Teléfono</label>
          <Field name="telefono" type="tel" />
          <ErrorMessage name="telefono" />

          <label htmlFor="consulta">Consulta</label>
          <Field name="consulta" type="text" />
          <ErrorMessage name="consulta" />

          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contacto;
