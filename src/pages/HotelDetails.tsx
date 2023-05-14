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
import { Typography } from "@mui/material";
import selectroomimg from "../assets/img/200x154/img1.jpg";
import "../assets/css/hoteldetails.css";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

import BathtubIcon from "@mui/icons-material/Bathtub";
import BedIcon from "@mui/icons-material/Bed";
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CallIcon from "@mui/icons-material/Call";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import WineBarIcon from "@mui/icons-material/WineBar";
import ChairIcon from "@mui/icons-material/Chair";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

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
      <BreadCrumb data={[{ title: "Home", link: "/" }, { title: "Hotels" }]} />
      <hr color="#b9b9b9" style={{ opacity: "0.2" }} />

      <Grid container spacing={3}>
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


          <Typography gutterBottom variant="h5" component="div" style={{margin:"3% 0"}}>
            Select Your Room
          </Typography>
          <HotelRoomSelect />


          <Amenities />
          <GradientOpacityDiv />
          <GradientOpacityDiv />
          <GradientOpacityDiv />
        </Grid>
        <Grid item xs={2}>
          <Card className="singleHotel-room-search">
            <Typography variant="h6" component="h4">
              From $350.00 / night
            </Typography>
            <div className="singleHotel-room-search-div">
              <Typography component="h4">Check In - Out</Typography>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </div>
            <div className="singleHotel-room-search-div">
              <Typography component="h4">Rooms and Guests</Typography>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </div>
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
  const listRandom = [1, 2, 3];
  return (
    <>
      {listRandom.map((item: any) => (
        <Card className="singleHotel-room-card" key={item}>
          <div style={{ display: "flex", width: "80%" }}>
            <img className="singleHotel-room-card-image" src={selectroomimg} />
            <div className="singleHotel-room-card-middle-div">
              <Typography component="div">Deluxe Twin Room</Typography>
              <div style={{display:"flex"}}>
                <Grid item xs={15} marginBottom={"4%"}>
                  <Typography style={{display: 'flex',  marginRight:"4%"}}>
                    <WifiIcon style={{marginRight:"8px", color:"blue"}}/> Free Wi-Fi
                  </Typography>
                  <Typography style={{display: 'flex'}}>
                    <BedIcon style={{marginRight:"8px", color:"blue"}} /> 2 single beds
                  </Typography>
                </Grid>
                <Grid item xs={18}>
                  <Typography style={{display: 'flex', marginRight:"4%"}}>
                    <AspectRatioIcon style={{marginRight:"8px", color:"blue"}}/> 15 m2
                  </Typography>
                  <Typography style={{display: 'flex'}}>
                    <BathtubIcon style={{marginRight:"8px", color:"blue", inlineSize: 'max-content'}}/> Shower and Bathtub
                  </Typography>
                </Grid>
              </div>
              <Typography>Room Photos and Details</Typography>
            </div>
          </div>
          <div>
            <Typography component="div">Todays best offer</Typography>
            <Typography component="div">from 899 / night</Typography>
            <Button variant="outlined">Book Now</Button>
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
          <Grid xs={4}>
            <Typography gutterBottom>
              <FitnessCenterIcon />
              {item}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
