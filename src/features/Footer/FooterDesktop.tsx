import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link, { LinkProps } from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const CustomLink = styled(Link)<LinkProps>(({ theme }) => ({
  color: "white",
}));
export default function FooterDesktop() {
  return (
    <>
      <Grid item xs={12} sm={2}>
        <Typography variant="h6">Nuestros servicios</Typography>
        <List dense>
          <ListItem>
            <ListItemText>
              <CustomLink href="/servicios" underline="hover">
                Servicios destacados
              </CustomLink>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <CustomLink href="#" underline="hover">
                Ofertas
              </CustomLink>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Typography variant="h6">Sobre Nosotros</Typography>
        <List dense>
          <ListItem>
            <ListItemText>
              <CustomLink href="/nuestra-historia" underline="hover">
                Nuestra historia
              </CustomLink>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <CustomLink href="trabaja-con-nosotros" underline="hover">
                Trabaja con nosotros
              </CustomLink>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Typography variant="h6">Contacta con nosotros</Typography>
        <List dense>
          <ListItem>
            <ListItemText>
              <CustomLink href="/contacto" underline="hover">
                Contacta con nosotros
              </CustomLink>
            </ListItemText>
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
            <ListItemText>
              <CustomLink href="/politicas-de-privacidad" underline="hover">
                Política de Privacidad
              </CustomLink>
            </ListItemText>
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
