import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./navigation.css";
import { useNavigate } from "react-router-dom";
import NavigatinToolBar from "./NavigationToolBar";
import NavigationSideBar from "./NavigationSideBar";


const NavigationBar = () => {
  const colorType =
    window.location.pathname === "/hotel-details" ? "#000000" : "inherit";
  const appBarColor =
    window.location.pathname === "/hotel-details" ? "white" : "transparent";
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const isScrollingUp = window.scrollY < (window as any).lastScroll || 0; // Check scroll direction
      (window as any).lastScroll = window.scrollY; // Remember the last scroll position

      // Check if the scroll position is at the top
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        // Check if the scroll direction is up
        setIsVisible(!isScrollingUp);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        className={`appBar ${isVisible ? "appBarVisible" : "appBarHidden"}`}
      >
        <NavigatinToolBar navigate={navigate} />
      </AppBar>

      <AppBar className="fullscreenNavabr" position="static" style={{ background: appBarColor, boxShadow:'none' }}>
        <Toolbar className="nav-container">
          <MenuIcon className="nav-menu" onClick={() => {setOpen(!open)}} />
          <div className="nav-left_container">
            <div className="nav-text-container">
              <Button style={{ marginRight: "2%", color: colorType }}>
                +812882255663388
              </Button>
            </div>
            <div>
              <Button style={{ color: colorType }}>yog192325@gmail.com</Button>
            </div>
          </div>
          <div className="nav-right_container">
            <div className="right-child-container">
              <Button style={{ color: colorType }}>
                <FacebookIcon />
                <InstagramIcon />
              </Button>
            </div>
            <div className="right-child-container">
              <Button style={{ color: colorType }}>
                <PersonIcon />
                Login or Register
              </Button>
            </div>
            <div>
              <Select
                value={"10"}
                displayEmpty
                variant="standard"
                sx={{ m: 1, minWidth: 120, color: colorType }}
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
        <div>
          <hr color="#b9b9b9" style={{ opacity: "0.2" }} />
        </div>
        <NavigatinToolBar navigate={navigate} />
      </AppBar>
      <NavigationSideBar open={open} setOpen={setOpen}/>
    </Box>
  );
};

export default NavigationBar;
