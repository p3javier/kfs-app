import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import HomeIcon from "../../assets/HomeIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(6),
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(4),
    },
    title: {
      marginRight: theme.spacing(7),
      marginTop: theme.spacing(3),
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Hidden xsDown>
          <Button>
            <Typography variant="h6" className={classes.title}>
              NUESTRA CARTA
            </Typography>
          </Button>

          <Button className="inherit">
            <Typography variant="h6" className={classes.title}>
              CUPONES
            </Typography>
          </Button>

          <Button className="inherit">
            <Typography variant="h6" className={classes.title}>
              ENCUENTRANOS
            </Typography>
          </Button>
        </Hidden>
        <HomeIcon />
      </Toolbar>
    </AppBar>
  );
}
