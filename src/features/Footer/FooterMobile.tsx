import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
//esto iba en heading pero hay un error de tipo fontWeight: theme.typography.fontWeightRegular,
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: "#3a1313",
      color: "#fff",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    accordion: {
      backgroundColor: "#3a1313",
      color: "#fff",
    },
  })
);

export default function FooterMobile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon htmlColor="#fff" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Nuestra comida</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            <ListItem>
              <ListItemText>Los más vendidos</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Menú del día</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Ofertas</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Cupones</ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon htmlColor="#fff" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h6">Sobre Nosotros</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            <ListItem>
              <ListItemText>Nuestra historia</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Nuestro proceso de elaboración</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Trabaja con nosotros</ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon htmlColor="#fff" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h6">Contacta con nosotros</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            <ListItem>
              <ListItemText>Encuentranos</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Contacta con nosotros</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Preguntas frecuentes</ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon htmlColor="#fff" />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography variant="h6">Nutrición</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            <ListItem>
              <ListItemText>Información nutricional</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Alergenos</ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon htmlColor="#fff" />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography variant="h6">Políticas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            <ListItem>
              <ListItemText>Información nutricional</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Alergenos</ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
