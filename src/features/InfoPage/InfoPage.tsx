import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Box, Hidden } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      padding: useMediaQuery(theme.breakpoints.down("sm"))
        ? theme.spacing(2)
        : theme.spacing(4),
    },
    title: {
      textTransform: "uppercase",
    },
  })
);

interface Info {
  title: string;
  body?: string;
  children?: JSX.Element;
}
const InfoPage = (props: Info) => {
  const mediaTheme = useTheme();
  const isPhone = useMediaQuery(mediaTheme.breakpoints.down("sm"));
  const classes = useStyles();
  const { title, body, children } = props;
  return (
    <Grid container justifyContent="center">
      <Grid item xs={isPhone ? 11 : 8}>
        <Paper>
          <Hidden xsDown>
            <Typography
              variant="h1"
              gutterBottom
              align="center"
              className={classes.title}
            >
              {title}
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography
              variant="h3"
              gutterBottom
              align="center"
              className={classes.title}
            >
              {title}
            </Typography>
          </Hidden>

          {children ? (
            <Box className={classes.body}>{children}</Box>
          ) : (
            <Typography variant="body1" align="center">
              {body}
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default InfoPage;
