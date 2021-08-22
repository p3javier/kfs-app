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
      [theme.breakpoints.down("sm")]: {
        fontSize: 11,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 18,
      },
    },
    buttonsSection: {
      flexGrow: 1,
    },
    mobileIcon: {
      flexGrow: 1,
    },
    hotDogKing: {
      marginRight: theme.spacing(7),
      marginTop: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
        fontSize: 25,
      },
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
        <Hidden smDown>
          <div className={classes.buttonsSection}>
            <Button>
              <Typography variant="h6" className={classes.title}>
                SERVICIOS
              </Typography>
            </Button>

            <Button className="inherit">
              <Typography variant="h6" className={classes.title}>
                CIUDADES
              </Typography>
            </Button>

            <Button className="inherit">
              <Typography variant="h6" className={classes.title}>
                CONTACTA CON NOSOTROS
              </Typography>
            </Button>
          </div>
          <div id="screen large">
            <HomeIcon />
          </div>
        </Hidden>
        <Hidden only={["xs", "md", "lg", "xl"]}>
          <Typography variant="h3" className={classes.hotDogKing}>
            HOT DOG KING
          </Typography>
          <div className={classes.mobileIcon} id="screen medium">
            <HomeIcon position="center" />
          </div>
        </Hidden>
        <Hidden only={["sm", "md", "lg", "xl"]}>
          <div className={classes.mobileIcon}>
            <HomeIcon position="center" size={100} margin="small" />
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
