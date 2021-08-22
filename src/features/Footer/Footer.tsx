import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
      minHeight: 400,
    },
    content: {
      padding: "3rem  2rem",
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container spacing={4} className={classes.content}>
        <Hidden smDown>
          <FooterDesktop />
        </Hidden>
        <Hidden smUp>
          <FooterMobile />
        </Hidden>
      </Grid>
    </footer>
  );
}
