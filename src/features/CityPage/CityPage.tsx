import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    intro: {
      padding: theme.spacing(2),
    },
  })
);
const CityPage = (props: { imagen: string; introduction?: string }) => {
  const { imagen, introduction } = props;
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
    </Grid>
  );
};

export default CityPage;
