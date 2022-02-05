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
    secondaryBannerA: {
      minHeight: theme.spacing(30),
      color: theme.palette.primary.contrastText + "!important",
      background:
        "linear-gradient(24deg, rgba(0,117,139,1) 0%, rgba(45,162,0,1) 43%, rgba(205,203,0,1) 100%)",
    },
    secondaryBannerB: {
      minHeight: theme.spacing(30),
      color: theme.palette.primary.contrastText + "!important",

      background:
        "linear-gradient(24deg, rgba(131,58,180,1) 0%, rgba(253,137,29,1) 50%, rgba(252,210,69,1) 100%)",
    },
    carousel: {
      backgroundColor: theme.palette.background.default,
      maxHeight: theme.spacing(60),
    },
    bannerImage: {
      maxHeight: theme.spacing(60),
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
      <div></div>
      <Grid item xs={12}>
        <Paper className={classes.mainBanner} elevation={4}>
          <Carousel className={classes.carousel}>
            <div>
              <img
                className={classes.bannerImage}
                src={
                  sizeOverSm
                    ? "https://i.imgur.com/uYCCPJo.jpg"
                    : "https://i.imgur.com/wQG2ThP.jpg"
                }
              />
            </div>
            <div>
              <img
                className={classes.bannerImage}
                src={
                  sizeOverSm
                    ? "https://i.imgur.com/KYDt3wx.jpeg"
                    : "https://i.imgur.com/u3JJ3os.jpg"
                }
              />
            </div>
          </Carousel>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.secondaryBannerA} elevation={4}>
          <Typography variant={sizeOverSm ? "h2" : "h4"} align="center">
            AGENCIA ESPECIALIZADA EN DESPEDIDAS DE SOLTERO/A
          </Typography>
        </Paper>
      </Grid>
      {sizeOverSm ? (
        <Grid item xs={12} md={6}>
          <Paper className={classes.secondaryBannerB} elevation={4}>
            <Typography variant="h2">
              MAXIMA PROFESIONALIDAD EN NUESTRO SERVICIO
            </Typography>
          </Paper>
        </Grid>
      ) : null}
    </Grid>
  );
}
