import React from "react";
import { Field } from "formik";
import * as yup from "yup";

import axios from "axios";
import qs from "qs";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const validationSchema = yup.object({
  nombre: yup.string().required("Es obligatorio"),
  email: yup
    .string()
    .email("Dirección de correo invalida")
    .required("Es obligatorio"),
});

const EmailSubForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      nombre: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit({ ...values });
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleSubmit = async (formValues: any) => {
    const data = {
      ...formValues,
    };

    try {
      const response = await axios({
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(data),
        url: "/",
      });
      console.log("RESPONSE", response);
    } catch (e: any) {
      throw new Error(e);
    }
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit} name="email-sub" data-netlify="true">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" />

        <TextField
          variant="filled"
          color="primary"
          name="nombre"
          type="text"
          label="nombre"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          error={formik.touched.nombre && Boolean(formik.errors.nombre)}
          helperText={formik.touched.nombre && formik.errors.nombre}
        />
        <TextField
          name="email"
          type="email"
          label="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button
          size="large"
          variant="contained"
          color="success"
          disableElevation
          type="submit"
        >
          <Typography variant="h6"> SUSCRIBIRSE</Typography>
        </Button>
      </form>
    </>
  );
};

export default EmailSubForm;
