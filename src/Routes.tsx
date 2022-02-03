import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Ciudades } from "./pages/Ciudades/Ciudades";
import Home from "./features/Home/Home";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import * as data from "@/assets/data/ciudades.json";
import CityPage from "@/features/CityPage/CityPage";
import Servicios from "@/pages/Servicios/Servicios";
import Contacto from "@/pages/Contacto/Contacto";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(5),
    },
  })
);
const Routes = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Router>
        <Switch>
          <Route path="/servicios" component={Servicios} exact />
          <Route path="/ciudades" component={Ciudades} exact />
          <Route path="/" component={Home} exact />
          <Route path="/contacto" component={Contacto} exact />
          {data.ciudades.map((ciudad) => (
            <Route
              path={ciudad.ficha}
              render={() => (
                <CityPage
                  imagen={ciudad.imagen}
                  introduction={ciudad.pageData?.introduction}
                  servicios={ciudad.pageData?.servicios}
                />
              )}
              exact
            />
          ))}
          {/*TODO: Check JSON Schema type validation compatibility with TypeScript */}
        </Switch>
      </Router>
    </Grid>
  );
};

export { Routes };
