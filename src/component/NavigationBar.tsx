import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import mytravelicon from '../assets/fonts/travelicon.svg'
import { Typography } from "@mui/material";
import "./navigation.css";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const colorType = window.location.pathname === "/hotel-details" ? '#000000' : 'inherit'
  const appBarColor = window.location.pathname === "/hotel-details" ? 'white' : 'transparent'
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: appBarColor }}>
        <Toolbar className="nav-container">
          <MenuIcon className="nav-menu" />
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
                value={'10'}
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
        <hr color="gray" style={{ opacity: "0.3"}} />
        </div>
        <Toolbar style={{ display: "flex", justifyContent: "space-evenly", paddingBottom:"1%", flexWrap: 'wrap' }}>
          <Typography fontSize={35} style={{ display: 'flex', alignItems: 'center', color: "black", width: "15%" }}>
            <img src={mytravelicon} style={{ width: '100%', marginRight: '2%' }} />
            MyTravel
          </Typography>
          <div style={{ display: "flex", marginLeft: "50%" }}>
            <Typography fontSize={18} style={{ color: "black", marginRight: "10%" }} onClick={() => navigate('/')}>
              Home
            </Typography>

            <Typography fontSize={18} style={{ color: "black", marginRight: "10%" }} onClick={() => navigate('/hotel-details')}>
              Hotels
            </Typography>

            <Typography fontSize={18} style={{ color: "black", marginRight: "10%" }} onClick={() => navigate('/about')}>
              About
            </Typography>
            <Typography fontSize={18} style={{ color: "black" }} onClick={() => navigate('/contact')}>
              Contact
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
