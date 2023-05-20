import React, { useState } from "react";
import BreadCrumb from "../component/breadcrumb/BreadCrumb";
import Carousel from "../component/carousel/Carousel";
import hotelimages from "../assets/img/960x490/img7.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import "../assets/css/hoteldetails.css";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import CallIcon from "@mui/icons-material/Call";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import WineBarIcon from "@mui/icons-material/WineBar";
import ChairIcon from "@mui/icons-material/Chair";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import VerticalLine from "../component/verticalLine/VerticalLine";

//Static Data for Room select card
import { SelectHotelRoomCard } from "../constants/staticData";

const list = [
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages,
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages,
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages,
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages,
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages,
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages,
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages,
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages,
  },
];

const HotelDetails = () => {
  return (
    <Box className="hoteldetails-main" sx={{ flexGrow: 1, paddingTop: "12%" }}>
      <hr color="#b9b9b9" style={{ opacity: "0.2" }} />
      <BreadCrumb data={[{ title: "Home", link: "/" }, { title: "Hotels" }]} />
      <hr color="#b9b9b9" style={{ opacity: "0.2" }} />

      <Grid container spacing={2}>
        <Grid item xs={8} style={{ marginLeft: "7%" }}>
          <div className="hotel-location-container">
            <div className="hotel-location-container-wrapper">
              <Typography
                className="hotel-location-container-wrapper-text"
                sx={{ backgroundColor: "#f8bd5b" }}
              >
                Newly Renovated
              </Typography>
              <Typography
                className="hotel-location-container-wrapper-text"
                sx={{ backgroundColor: "#c72f74" }}
              >
                Free Wifi
              </Typography>
            </div>
            <Typography
              className="hotel-location-container-title"
              variant="h5"
              component="div"
            >
              Park Avenue Baker Street London
            </Typography>
            <Typography className="hotel-location-container-locationarea">
              Greater London, United Kingdom - View on map
            </Typography>
          </div>

          <Carousel
            list={list}
            spaceBetween={25}
            slidesPerView={1}
            cardTextContent={false}
          />

          <GradientOpacityDiv />

          <hr color="#b9b9b9" style={{ opacity: "0.2" }} />

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ margin: "3% 0" }}
          >
            Select Your Room
          </Typography>
          <HotelRoomSelect />

          <Amenities />
          <NearestEssentials />
          <WhatNearby />
          <HouseRules />
        </Grid>
        <Grid item xs={2.5}>
          <div style={{ marginTop: "16.4%", marginBottom: "15%" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom:"5%" }}>
              <Button
                variant="outlined"
                style={{
                  padding: "3% 0%",
                  border: "2px solid #e7eaf3",
                  margin: "1%",
                }}
              >
                <FavoriteBorderOutlinedIcon />
              </Button>
              <Button
                variant="outlined"
                style={{
                  padding: "3% 0%",
                  border: "2px solid #e7eaf3",
                  margin: "1%",
                }}
              >
                <ShareOutlinedIcon />
              </Button>
              <Typography style={{color:"white", backgroundColor:"#297cbb", padding:"3.5%", margin:'2%', borderRadius:"4px"}}>4.6/5</Typography>
              <div>
                <Typography style={{color:'#297cbb'}}>Excellent</Typography>
                <Typography>(166 Reviews)</Typography>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <Button
                variant="contained"
                style={{ padding: "6px 9px", borderRadius: "4px 0px 0px 4px", border:"1px solid #a864a8", backgroundColor:"#a864a8", color:'white'}}
              >
                <Typography style={{fontSize:"80%", inlineSize: 'max-content'}}>Lowest price includes</Typography>
              </Button>
              <Button
                variant="outlined"
                style={{ padding: "6px 9px", borderRadius: "0px 4px 4px 0px", border:"1px solid #a864a8"}}
              >
                <Typography style={{fontSize:"80%", inlineSize: 'max-content'}}>Free breakfast</Typography>
              </Button>
            </div>
          </div>
          <Card className="singleHotel-room-search">
            <List>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  width: "100%",
                  flexWrap: "wrap",
                  margin: "9% 0",
                }}
              >
                <Typography>From</Typography>
                <Typography style={{ fontSize: "22px", margin: "0 4%" }}>
                  $350.00
                </Typography>
                <Typography>/ night</Typography>
              </div>
              <hr color="#b9b9b9" style={{ opacity: "0.2" }} />
              <div className="singleHotel-room-search-div">
                <Typography component="h4">Check In - Out</Typography>
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                />
              </div>
              <hr color="#b9b9b9" style={{ opacity: "0.2", margin: "1% 0" }} />
              <div className="singleHotel-room-search-div">
                <Typography component="h4">Rooms and Guests</Typography>
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                />
              </div>
            </List>
            <Button variant="contained" style={{ padding: "5% 24%" }}>
              <SearchIcon /> Search
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HotelDetails;

const HotelRoomSelect = () => {
  const listCss: any = {
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <>
      {SelectHotelRoomCard.map((item: any) => (
        <Card className="singleHotel-room-card" key={item}>
          <div style={{ display: "flex", width: "80%" }}>
            <img
              className="singleHotel-room-card-image"
              src={item.hotelImage}
              alt={item.name}
            />
            <div className="singleHotel-room-card-middle-div">
              <Typography component="div">{item.name}</Typography>
              <div style={{ display: "flex" }}>
                <List style={listCss}>
                  {item.amenities.map((hotelservice: any) => (
                    <ListItemButton>
                      <ListItemIcon style={{ minWidth: "30px" }}>
                        {hotelservice.icon}
                      </ListItemIcon>
                      <ListItemText primary={hotelservice.title} />
                    </ListItemButton>
                  ))}
                </List>
              </div>
              <Typography>Room Photos and Details</Typography>
            </div>
          </div>
          <VerticalLine />
          <div
            style={{
              display: "flex",
              width: "auto",
              flexFlow: "column wrap",
              marginLeft: "2%",
              justifyContent: "center",
            }}
          >
            <List>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  marginBottom: "5%",
                }}
              >
                <Typography>From</Typography>
                <Typography style={{ fontSize: "22px", margin: "0 4%" }}>
                  {item.hotelPrice}
                </Typography>
                <Typography>/ night</Typography>
              </div>
              <Button
                variant="outlined"
                style={{
                  padding: "13px 55px",
                  inlineSize: "max-content",
                  border: "2px solid blue",
                }}
              >
                Book Now
              </Button>
            </List>
          </div>
        </Card>
      ))}
    </>
  );
};

const GradientOpacityDiv = () => {
  const [isOpaque, setIsOpaque] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState("200px");

  const handleClick = () => {
    setIsOpaque(!isOpaque);
    setExpandedHeight(expandedHeight === "" ? "200px" : "");
  };

  const divStyle: any = {
    background: "white",
    color: "black",
    position: "relative",
    maxHeight: expandedHeight,
    height: "auto",
    padding: "20px",
    overflow: "hidden",
    transition: "maxHeight 1s",
  };

  const gradientStyle: any = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    opacity: isOpaque ? 0 : 1,
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
    transition: "opacity 0.5s",
  };

  const buttonStyle = {
    marginTop: "10px",
    borderBottom: "1px solid #297cbb",
    borderRadius: 0,
    color: "#297cbb",
    marginBottom: "2%",
  };

  const handleCheveron = () => {
    if (isOpaque) {
      return <KeyboardArrowUpIcon />;
    } else {
      return <KeyboardArrowDownIcon />;
    }
  };

  return (
    <>
      <div style={divStyle}>
        <div style={gradientStyle}></div>
        <Typography gutterBottom variant="h5" component="div">
          Description
        </Typography>
        <Typography>
          The 4-star Park Central Hotel offers comfort and convenience whether
          you're on business or holiday in New York (NY). Featuring a complete
          list of amenities, guests will find their stay at the property a
          comfortable one. Service-minded staff will welcome and guide you at
          the Park Central Hotel. Air conditioning, heating, desk, alarm clock,
          iPod docking station can be found in selected guestrooms. The hotel
          offers various recreational opportunities. Park Central Hotel combines
          warm hospitality with a lovely ambiance to make your stay in New York
          (NY) unforgettable. Once inside the historic palace located on the
          Right Bank of the Seine, see unmissable and iconic sights Once inside
          the historic palace located on the Right Bank of the Seine, see
          unmissable and iconic sights such as the Mona Lisa and Venus de Milo.
          Discover masterpieces of the Renaissance and ancient Egyptian relics,
          along with paintings from the 13th to 20th centuries, prints from the
          Royal Collection, and much more such as the Mona Lisa and Venus de
          Milo. Discover masterpieces of the Renaissance and ancient Egyptian
          relics, along with paintings from the 13th to 20th centuries, prints
          from the Royal Collection, and much more.
        </Typography>
      </div>
      <Button variant="text" style={buttonStyle} onClick={handleClick}>
        View All {handleCheveron()}
      </Button>
    </>
  );
};

const Amenities = () => {
  const newtemList = [
    "wifi",
    "wake-up call",
    "Bathrobes",
    "Fitness center",
    "Telephone",
    "Dry cleaning",
    "Mini bar",
    "Hair dryer",
    "High Chair",
    "Restaurant",
    "Air Cinditioning",
    "Slippers",
  ];
  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        Amenities
      </Typography>
      <Grid className="amenities-container">
        {newtemList.map((item: string) => (
          <Grid xs={4} marginTop="2%">
            <Typography gutterBottom>
              <FitnessCenterIcon
                style={{ marginRight: "2%" }}
                color="primary"
              />
              {item}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const NearestEssentials = () => {
  const [isOpaque, setIsOpaque] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState("800px");

  const handleClick = () => {
    setIsOpaque(!isOpaque);
    setExpandedHeight(expandedHeight === "" ? "800px" : "");
  };

  const divStyle: any = {
    background: "white",
    color: "black",
    position: "relative",
    maxHeight: expandedHeight,
    height: "auto",
    padding: "20px",
    overflow: "hidden",
    transition: "maxHeight 1s",
  };

  const gradientStyle: any = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    opacity: isOpaque ? 0 : 1,
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
    transition: "opacity 0.5s",
  };

  const buttonStyle = {
    marginTop: "10px",
    borderBottom: "1px solid #297cbb",
    borderRadius: 0,
    color: "#297cbb",
    marginBottom: "2%",
  };

  const handleCheveron = () => {
    if (isOpaque) {
      return <KeyboardArrowUpIcon />;
    } else {
      return <KeyboardArrowDownIcon />;
    }
  };

  return (
    <>
      <div style={divStyle}>
        <div style={gradientStyle}></div>
        <Typography gutterBottom variant="h5" component="div">
          Nearest Essentials
        </Typography>
        <Typography>
          The 4-star Park Central Hotel offers comfort and convenience whether
          you're on business or holiday in New York (NY). Featuring a complete
          list of amenities, guests will find their stay at the property a
          comfortable one. Service-minded staff will welcome and guide you at
          the Park Central Hotel. Air conditioning, heating, desk, alarm clock,
          iPod docking station can be found in selected guestrooms. The hotel
          offers various recreational opportunities. Park Central Hotel combines
          warm hospitality with a lovely ambiance to make your stay in New York
          (NY) unforgettable. Once inside the historic palace located on the
          Right Bank of the Seine, see unmissable and iconic sights Once inside
          the historic palace located on the Right Bank of the Seine, see
          unmissable and iconic sights such as the Mona Lisa and Venus de Milo.
          Discover masterpieces of the Renaissance and ancient Egyptian relics,
          along with paintings from the 13th to 20th centuries, prints from the
          Royal Collection, and much more such as the Mona Lisa and Venus de
          Milo. Discover masterpieces of the Renaissance and ancient Egyptian
          relics, along with paintings from the 13th to 20th centuries, prints
          from the Royal Collection, and much more.
        </Typography>
      </div>
      <Button variant="text" style={buttonStyle} onClick={handleClick}>
        View All {handleCheveron()}
      </Button>
    </>
  );
};

const WhatNearby = () => {
  const [isOpaque, setIsOpaque] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState("200px");

  const handleClick = () => {
    setIsOpaque(!isOpaque);
    setExpandedHeight(expandedHeight === "" ? "200px" : "");
  };

  const divStyle: any = {
    background: "white",
    color: "black",
    position: "relative",
    maxHeight: expandedHeight,
    height: "auto",
    padding: "20px",
    overflow: "hidden",
    transition: "maxHeight 1s",
  };

  const gradientStyle: any = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    opacity: isOpaque ? 0 : 1,
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
    transition: "opacity 0.5s",
  };

  const buttonStyle = {
    marginTop: "10px",
    borderBottom: "1px solid #297cbb",
    borderRadius: 0,
    color: "#297cbb",
    marginBottom: "2%",
  };

  const handleCheveron = () => {
    if (isOpaque) {
      return <KeyboardArrowUpIcon />;
    } else {
      return <KeyboardArrowDownIcon />;
    }
  };

  return (
    <>
      <div style={divStyle}>
        <div style={gradientStyle}></div>
        <Typography gutterBottom variant="h5" component="div">
          What's Nearby
        </Typography>
        <Typography>
          The 4-star Park Central Hotel offers comfort and convenience whether
          you're on business or holiday in New York (NY). Featuring a complete
          list of amenities, guests will find their stay at the property a
          comfortable one. Service-minded staff will welcome and guide you at
          the Park Central Hotel. Air conditioning, heating, desk, alarm clock,
          iPod docking station can be found in selected guestrooms. The hotel
          offers various recreational opportunities. Park Central Hotel combines
          warm hospitality with a lovely ambiance to make your stay in New York
          (NY) unforgettable. Once inside the historic palace located on the
          Right Bank of the Seine, see unmissable and iconic sights Once inside
          the historic palace located on the Right Bank of the Seine, see
          unmissable and iconic sights such as the Mona Lisa and Venus de Milo.
          Discover masterpieces of the Renaissance and ancient Egyptian relics,
          along with paintings from the 13th to 20th centuries, prints from the
          Royal Collection, and much more such as the Mona Lisa and Venus de
          Milo. Discover masterpieces of the Renaissance and ancient Egyptian
          relics, along with paintings from the 13th to 20th centuries, prints
          from the Royal Collection, and much more.
        </Typography>
      </div>
      <Button variant="text" style={buttonStyle} onClick={handleClick}>
        View All {handleCheveron()}
      </Button>
    </>
  );
};

const HouseRules = () => {
  const [isOpaque, setIsOpaque] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState("200px");

  const handleClick = () => {
    setIsOpaque(!isOpaque);
    setExpandedHeight(expandedHeight === "" ? "200px" : "");
  };

  const divStyle: any = {
    background: "white",
    color: "black",
    position: "relative",
    maxHeight: expandedHeight,
    height: "auto",
    padding: "20px",
    overflow: "hidden",
    transition: "maxHeight 1s",
  };

  const gradientStyle: any = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    opacity: isOpaque ? 0 : 1,
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
    transition: "opacity 0.5s",
  };

  const buttonStyle = {
    marginTop: "10px",
    borderBottom: "1px solid #297cbb",
    borderRadius: 0,
    color: "#297cbb",
    marginBottom: "2%",
  };

  const handleCheveron = () => {
    if (isOpaque) {
      return <KeyboardArrowUpIcon />;
    } else {
      return <KeyboardArrowDownIcon />;
    }
  };

  return (
    <>
      <div style={divStyle}>
        <div style={gradientStyle}></div>
        <Typography gutterBottom variant="h5" component="div">
          House Rules
        </Typography>
        <Typography>
          The 4-star Park Central Hotel offers comfort and convenience whether
          you're on business or holiday in New York (NY). Featuring a complete
          list of amenities, guests will find their stay at the property a
          comfortable one. Service-minded staff will welcome and guide you at
          the Park Central Hotel. Air conditioning, heating, desk, alarm clock,
          iPod docking station can be found in selected guestrooms. The hotel
          offers various recreational opportunities. Park Central Hotel combines
          warm hospitality with a lovely ambiance to make your stay in New York
          (NY) unforgettable. Once inside the historic palace located on the
          Right Bank of the Seine, see unmissable and iconic sights Once inside
          the historic palace located on the Right Bank of the Seine, see
          unmissable and iconic sights such as the Mona Lisa and Venus de Milo.
          Discover masterpieces of the Renaissance and ancient Egyptian relics,
          along with paintings from the 13th to 20th centuries, prints from the
          Royal Collection, and much more such as the Mona Lisa and Venus de
          Milo. Discover masterpieces of the Renaissance and ancient Egyptian
          relics, along with paintings from the 13th to 20th centuries, prints
          from the Royal Collection, and much more.
        </Typography>
      </div>
      <Button variant="text" style={buttonStyle} onClick={handleClick}>
        View All {handleCheveron()}
      </Button>
    </>
  );
};
