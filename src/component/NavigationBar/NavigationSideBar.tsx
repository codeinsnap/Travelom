import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";

const drawerWidth = 240;
const NavigationSideBar = (props: any) => {
  const { open, setOpen } = props;

  const handleToggle = () => {
    setOpen(!open);
  };
  

  return (
    <>
      <Drawer anchor="left" open={open} onClose={handleToggle}>
        <List>
          <ListItemButton>
            <ListItemText primary="Button 1" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Button 2" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Button 3" />
          </ListItemButton>
          {/* Add more ListItem components for additional buttons */}
        </List>
      </Drawer>
    </>
  );
};

export default NavigationSideBar;
