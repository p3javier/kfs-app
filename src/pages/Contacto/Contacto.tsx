import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { Container, Button, Grid, Typography } from "@mui/material";
import * as yup from "yup";

import Box, { BoxProps } from "@mui/material/Box";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

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
    <Container maxWidth="md">
      <Typography variant="h2" component="div" gutterBottom>
        Contacto / Reservas
      </Typography>

      <Box sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
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
            <Item>
              <Field
                color="secondary"
                component={TextField}
                name="nombre"
                type="text"
                label="nombre"
                htmlFor="nombre"
                fullWidth
              />
            </Item>
            <Item>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="email"
                htmlFor="email"
                fullWidth
              />
            </Item>
            <Item>
              <Field
                component={TextField}
                name="telefono"
                type="tel"
                label="telefono"
                htmlFor="telefono"
                fullWidth
              />
            </Item>
            <Item>
              <Field
                component={TextField}
                name="consulta"
                type="text"
                label="consulta"
                htmlFor="consulta"
                multiline
                fullWidth
              />
            </Item>
            <Button type="submit">Enviar</Button>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
};

export default Contacto;
