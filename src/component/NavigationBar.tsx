import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./navigation.css";
import PersonIcon from "@mui/icons-material/Person";

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: "transparent", position: "absolute"}}>
        <Toolbar className="container">
          <div className="left_container">
            <div className="text-container">
              <Button color="inherit" style={{ marginRight: "2%" }}>
                9999999999
              </Button>
            </div>
            <div>
              <Button color="inherit">yog192325@gmail.com</Button>
            </div>
          </div>
          <div className="Right_container">
            <div className="inner_container">
              <Button color="inherit">Social Media Icon</Button>
            </div>
            <div className="inner_container">
              <Button color="inherit">
                <PersonIcon />
                Login or Register
              </Button>
            </div>
            <div>
              <Button color="inherit">EUR</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
