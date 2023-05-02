import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./navigation.css";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "transparent", position: "absolute" }}>
        <Toolbar className="nav-container">
          <MenuIcon className="nav-menu" />
          <div className="nav-left_container">
            <div className="nav-text-container">
              <Button color="inherit" style={{ marginRight: "2%" }}>
                +812882255663388
              </Button>
            </div>
            <div>
              <Button color="inherit">yog192325@gmail.com</Button>
            </div>
          </div>
          <div className="nav-right_container">
            <div className="right-child-container">
              <Button color="inherit">
                <FacebookIcon />
                <InstagramIcon />
              </Button>
            </div>
            <div className="right-child-container">
              <Button color="inherit">
                <PersonIcon />
                Login or Register
              </Button>
            </div>
            <div>
              <Select
                value={'10'}
                displayEmpty
                variant="standard"
                sx={{ m: 1, minWidth: 120, color:"white" }}
              >
                <MenuItem value="">
                  <em>Eur</em>
                </MenuItem>
                <MenuItem value={10}>Eur</MenuItem>
                <MenuItem value={20}>Aur</MenuItem>
                <MenuItem value={30}>Inr</MenuItem>
              </Select>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
