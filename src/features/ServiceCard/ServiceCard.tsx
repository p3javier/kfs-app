import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@mui/material/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DetailsCarousel from "../DetailsCarousel/DetailsCarousel";
import ServiceCardDialog from "@/features/ServiceCardDialog/ServiceCardDialog";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
    },
    media: {
      height: 320,
    },
  })
);
const ServiceCard = (props: {
  titulo: string;
  imagen: string;
  description: string;
  details?: {
    images?: string[];
    info?: string[];
  };
}) => {
  const { titulo, description, imagen, details } = props;
  const classes = useStyles();
  const openCarousel = () => {};
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid item>
        <Card className={classes.root} onClick={() => openCarousel()}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={imagen}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {titulo}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              onClick={handleClickOpen}
            >
              Más Información
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <ServiceCardDialog
        open={open}
        handleClose={handleClose}
        title={titulo}
        body={details ? details.info : []}
      />
    </>
  );
};
//{images ? <DetailsCarousel items={images} /> : <div></div>}
export default ServiceCard;
