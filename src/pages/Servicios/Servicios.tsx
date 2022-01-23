import React from "react";
import Servicio from "@/features/Servicio/Servicio";
import * as listaServicios from "@/assets/data/servicios.json";
import { v1 as uuidv1 } from "uuid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      backgroundColor: "#5e5e5e",
    },
  })
);
const Servicios = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {listaServicios.servicios.map((servicio) => {
        return (
          <Servicio
            key={uuidv1()}
            title={servicio.titulo}
            image={servicio.imagen}
            imageTitle={servicio.tituloImagen}
          >
            {servicio.descripcion}
          </Servicio>
        );
      })}
    </Paper>
  );
};

export default Servicios;
