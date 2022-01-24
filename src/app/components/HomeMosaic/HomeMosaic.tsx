import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Carousel from "react-material-ui-carousel";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainBanner: {
      minHeight: theme.spacing(40),
    },
    secondaryBanner: {
      height: theme.spacing(30),
    },
  })
);
export default function HeadBanner() {
  const classes = useStyles();
  const theme = useTheme();
  const sizeOverSm = useMediaQuery(theme.breakpoints.up("sm"));
  let rowNumber: number | undefined;
  let colsNumber: number | undefined;
  if (sizeOverSm) {
    rowNumber = 3;
    colsNumber = 1;
  } else {
    rowNumber = 2;
    colsNumber = 3;
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.mainBanner} elevation={4}>
          <Carousel>
            <img src="https://i.imgur.com/uYCCPJo.jpg" />
            <img src="https://i.imgur.com/KYDt3wx.jpg" />
          </Carousel>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.secondaryBanner} elevation={4}>
          <Typography variant="h2">
            AGENCIA ESPECIALIZADA EN DESPEDIDAS DE SOLTERO/A
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.secondaryBanner} elevation={4}>
          <Typography variant="h2">
            MAXIMA PROFESIONALIDAD EN NUESTRO SERVICIO
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
