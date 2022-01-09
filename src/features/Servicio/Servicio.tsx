import React, { ReactChild } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      margin: theme.spacing(3),
      minHeight: "40vh",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    coverLg: {
      minWidth: "20%",
    },
    coverSm: {
      width: "100%",
      minHeight: "20rem",
    },
  })
);

const Servicio = (props: {
  children: ReactChild;
  title: string;
  image: string;
  imageTitle: string;
}) => {
  const { children, title, image, imageTitle } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="elevation" elevation={5}>
      <div className={classes.details}>
        <Hidden mdUp>
          <CardMedia
            className={classes.coverSm}
            image={image}
            title={imageTitle}
          />
        </Hidden>
        <CardContent className={classes.content}>
          <Typography variant="h3">{title}</Typography>
          {children}
        </CardContent>
      </div>
      <Hidden smDown>
        <CardMedia
          className={classes.coverLg}
          image={image}
          title={imageTitle}
        />
      </Hidden>
    </Card>
  );
};

export default Servicio;
