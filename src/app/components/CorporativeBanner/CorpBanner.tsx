import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      border: "2px solid #000",
      borderRadius: "0.5rem",
    },
  })
);
export default function CorpBanner() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <Box textAlign="center" fontFamily="Astana">
            <Typography variant="h2" style={{ color: "#e53743" }}>
              Trabaja con nosotros
            </Typography>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <Box textAlign="center" fontFamily="Astana">
            <Typography variant="h2" style={{ color: "#3a1313" }}>
              Nuestro{" "}
            </Typography>
            <Typography variant="h2" style={{ color: "#3a1313" }}>
              compromiso
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <Box textAlign="center" fontFamily="Astana">
            <Typography variant="h2" style={{ color: "#f8b816" }}>
              Nuestras medidas anticovid
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
