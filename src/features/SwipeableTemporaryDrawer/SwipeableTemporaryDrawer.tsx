import React from "react";
import { SwipeableDrawer, Typography } from "@material-ui/core";
import { List, ListItem } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectToggle } from "./STDSlice";
import { open } from "@/features/SwipeableTemporaryDrawer/STDSlice";

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
          <Typography></Typography>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}
