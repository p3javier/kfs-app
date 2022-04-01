import React from "react";
import { SwipeableDrawer, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectToggle } from "./STDSlice";
import { open } from "@/features/SwipeableTemporaryDrawer/STDSlice";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Link } from "react-router-dom";
//import { styled } from '@mui/material/styles';

//const MedusaListButton = styled(List)({

export default function SwipeableTemporaryDrawer() {
  const isOpen = useSelector(selectToggle);
  const dispatch = useDispatch();

  return (
    <SwipeableDrawer
      variant="temporary"
      open={isOpen}
      onOpen={() => dispatch(open(true))}
      onClose={() => dispatch(open(false))}
    >
      <List>
        <ListItem>
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Inicio"
                primaryTypographyProps={{
                  fontSize: "1.5rem",
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link to="/servicios">
            <ListItemButton>
              <ListItemIcon>
                <CelebrationIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Servicios"
                primaryTypographyProps={{
                  fontSize: "1.5rem",
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link to="/ciudades">
            <ListItemButton>
              <ListItemIcon>
                <LocationCityIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Ciudades"
                primaryTypographyProps={{
                  fontSize: "1.5rem",
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link to="/contacto">
            <ListItemButton>
              <ListItemIcon>
                <ContactPageIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Contacta con nosotros"
                primaryTypographyProps={{
                  fontSize: "1.5rem",
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider />
      </List>
    </SwipeableDrawer>
  );
}
