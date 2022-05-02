import React, { useState } from "react";
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import Grid, { GridSize } from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import ImageSub from "../../images/email-sub.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import EmailSubForm from "@/app/components/EmailSubForm/EmailSubForm";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginRight: theme.spacing(6),
      marginTop: theme.spacing(8),
      marginLeft: theme.spacing(2),
    },
    title: {
      marginRight: theme.spacing(6),
      marginTop: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 22,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 24,
      },
    },
    box: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },
    },
    image: {
      [theme.breakpoints.down("sm")]: {
        height: 200,
        width: 200,
      },
      [theme.breakpoints.up("md")]: {
        height: 300,
        width: 300,
      },
      [theme.breakpoints.up("lg")]: {
        height: 400,
        width: 400,
      },
    },
  })
);

export default function EmailSub() {
  const classes = useStyles();
  const theme = useTheme();
  const sizeOverSm = useMediaQuery(theme.breakpoints.up("sm"));
  const [emailOpen, setEmailOpen] = useState(false);
  let colsNumber: boolean | GridSize;
  if (sizeOverSm) {
    colsNumber = 7;
  } else {
    colsNumber = 12;
  }

  const handleClick = () => setEmailOpen(!emailOpen);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={colsNumber}>
          <Typography variant="h3" className={classes.title}>
            <Box fontWeight="fontWeightBold" className={classes.box}>
              ¡SUSCRIBITE PARA NO PERDERTE NINGUNA DE NUESTRAS OFERTAS!
            </Box>
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            disableElevation
            className={classes.button}
            onClick={() => handleClick()}
          >
            <Typography variant="h6">¡VENGA, ME SUSCRIBO!</Typography>
          </Button>
          {emailOpen ? <EmailSubForm /> : null}
        </Grid>
        <Hidden xsDown>
          <Grid item xs={5}>
            <img
              src="https://i.imgur.com/4blvOrX.jpg"
              alt="email subscription"
              className={classes.image}
            />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
