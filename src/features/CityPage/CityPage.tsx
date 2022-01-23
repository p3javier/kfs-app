import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ServiceCard from "../ServiceCard/ServiceCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    intro: {
      padding: theme.spacing(2),
    },
  })
);

interface IServicio {
  titulo: string;
  description: string;
  imagen: string;
  details: {
    images: string[];
  };
}
const CityPage = (props: {
  imagen: string;
  introduction?: string;
  servicios: IServicio[];
}) => {
  const { imagen, introduction, servicios } = props;
  console.log("SERVICIOS", servicios);
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <img src={imagen} width="100%" />
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.intro}>
          <Typography>{introduction}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.intro}>
          <Typography variant="h2">Actividades</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {servicios ? (
            servicios.map((servicio) => (
              <ServiceCard
                titulo={servicio.titulo}
                description={servicio.description}
                imagen={servicio.imagen}
                images={servicio.details.images}
              />
            ))
          ) : (
            <div>NO LO DEBERIA VER</div>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CityPage;
