import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { ICiudad } from "@/typescript/ICiudad";
import openLink from "./openLink";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
    },
    media: {
      height: 140,
    },
  })
);
const CityCard = (props: ICiudad) => {
  const { ciudad, descripcion, imagen, ficha } = props;
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root} onClick={() => openLink(ficha)}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imagen}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {ciudad}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary" variant="contained">
            Explorar eventos
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CityCard;
