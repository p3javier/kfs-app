import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
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
      minHeight: theme.spacing(30),
      backgroundColor: theme.palette.background.default + "!important",
      color: theme.palette.primary.contrastText + "!important",
    },
    carousel: {
      backgroundColor: theme.palette.background.default,
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
          <Carousel className={classes.carousel}>
            <div>
              <img src="https://i.imgur.com/uYCCPJo.jpg" />
            </div>
            <div>
              <img
                src={
                  sizeOverSm
                    ? "https://i.imgur.com/KYDt3wx.jpeg"
                    : "https://i.imgur.com/4blvOrX.jpg"
                }
              />
            </div>
          </Carousel>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.secondaryBanner} elevation={4}>
          <Typography variant={sizeOverSm ? "h2" : "h4"} align="center">
            AGENCIA ESPECIALIZADA EN DESPEDIDAS DE SOLTERO/A
          </Typography>
        </Paper>
      </Grid>
      {sizeOverSm ? (
        <Grid item xs={12} md={6}>
          <Paper className={classes.secondaryBanner} elevation={4}>
            <Typography variant="h2">
              MAXIMA PROFESIONALIDAD EN NUESTRO SERVICIO
            </Typography>
          </Paper>
        </Grid>
      ) : null}
    </Grid>
  );
}
