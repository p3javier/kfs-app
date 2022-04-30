import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import openLink from "@/functions/openLink";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      cursor: "pointer",
      border: "2px solid #000",
      borderRadius: "0.5rem",
      backgroundColor: theme.palette.background.default + "!important",
      "&:hover": {
        background: "	#808080 !important",
      },
      padding: theme.spacing(2),
    },
    container: {
      display: "table-cell",
      verticalAlign: "middle",
    },
  })
);
export default function CorpBanner() {
  const classes = useStyles();
  const handleTrabajaConNosotros = () => openLink("/trabaja-con-nosotros");
  const handleNuestroCompromiso = () => openLink("/nuestro-compromiso");
  return (
    <Stack spacing={2}>
      <Paper className={classes.paper} onClick={handleTrabajaConNosotros}>
        <Box textAlign="center" fontFamily="Astana">
          <Typography variant="h2" style={{ color: "#FECAF8" }}>
            Trabaja con nosotros
          </Typography>
        </Box>
      </Paper>

      <Paper className={classes.paper} onClick={handleNuestroCompromiso}>
        <Box textAlign="center" fontFamily="Astana">
          <Typography variant="h2" style={{ color: "#FFFF00" }}>
            Nuestro{" "}
          </Typography>
          <Typography variant="h2" style={{ color: "#FFFF00" }}>
            compromiso
          </Typography>
        </Box>
      </Paper>
    </Stack>
  );
}
