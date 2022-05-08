import React from "react";
import * as yup from "yup";

import axios from "axios";
import qs from "qs";
import { useFormik } from "formik";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  margin: `${theme.spacing(2)} 0`,
  "& label.Mui-focused": {
    color: theme.palette.secondary.main,
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "#7D7D7D",
    "& fieldset": {},
    "&.Mui-focused": {
      borderColor: theme.palette.secondary.main,
    },
    "&.MuiFilledInput-underline": {
      textDecorationColor: theme.palette.secondary.main,
    },
  },
}));

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
      handleSubmit({ ...values, "form-name": "email-sub" });
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
        <Grid container spacing={3}>
          <Grid item>
            <CustomTextField
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
          </Grid>
          <Grid item>
            <CustomTextField
              variant="filled"
              name="email"
              type="email"
              label="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item>
            <Button
              size="large"
              variant="contained"
              color="success"
              disableElevation
              type="submit"
              sx={(theme) => ({
                margin: `${theme.spacing(2)} 0`,
                padding: theme.spacing(1.5),
              })}
            >
              <Typography variant="h6"> SUSCRIBIRSE</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default EmailSubForm;
