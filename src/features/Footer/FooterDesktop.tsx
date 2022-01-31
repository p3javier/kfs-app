import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function FooterDesktop() {
  return (
    <>
      <Grid item xs={12} sm={2}>
        <Typography variant="h6">Nuestros servicios</Typography>
        <List dense>
          <ListItem>
            <ListItemText>Servicios destacados</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Ofertas</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Cupones</ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Typography variant="h6">Sobre Nosotros</Typography>
        <List dense>
          <ListItem>
            <ListItemText>Nuestra historia</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Trabaja con nosotros</ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Typography variant="h6">Contacta con nosotros</Typography>
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
      </Grid>

      <Grid item xs={12} sm={2}>
        <Typography variant="h6">Políticas</Typography>
        <List dense>
          <ListItem>
            <ListItemText>Política de Privacidad</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Uso de Cookies</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Nota Legal</ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Typography variant="h5">Redes Sociales</Typography>
      </Grid>
    </>
  );
}
