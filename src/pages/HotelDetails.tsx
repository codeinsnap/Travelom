import React, { useState } from "react";
import BreadCrumb from "../component/breadcrumb/BreadCrumb";
import Carousel from "../component/carousel/Carousel";
import hotelimages from "../assets/img/960x490/img7.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "../assets/css/hoteldetails.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Typography } from "@mui/material";
import selectroomimg from '../assets/img/200x154/img1.jpg'
import BedIcon from '@mui/icons-material/Bed';
import WifiIcon from '@mui/icons-material/Wifi';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

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
        <Grid item xs={7} style={{ marginLeft: "10%" }}>
          <div>
            <div>
              <Typography>Newly Renovated</Typography>
              <Typography>Free Wifi</Typography>
            </div>
            <Typography>Park Avenue Baker Street London</Typography>
            <Typography>
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
          <Typography gutterBottom variant="h5" component="div">
            Select Your Room
          </Typography>
          <HotelRoomSelect />
        </Grid>
        <Grid item xs={3}>
          xyz
        </Grid>
      </Grid>
    </Box>
  );
};

export default HotelDetails;

const HotelRoomSelect = () => {
  const listRandom = [1, 2]
  return (<>
    {listRandom.map((item: any) => (
      <Card className="singleHotel-room-card" key={item}>
        <div style={{ display: "flex", width: "70%" }}>
          <img className="singleHotel-room-card-image" src={selectroomimg} />
          <div className="singleHotel-room-card-middle-div">
            <Typography component="div">
              Deluxe Twin Room
            </Typography>
            <div>
              <Grid item xs={12} display={'flex'} marginBottom={'4%'}>
                <Typography>
                  <WifiIcon /> Free Wi-Fi
                </Typography>
                <Typography>
                  <BedIcon /> 2 single beds
                </Typography>
              </Grid>
              <Grid item xs={12} display={'flex'}>
                <Typography>
                  <AspectRatioIcon /> 15 m2
                </Typography>
                <Typography>
                  <BathtubIcon /> Shower and Bathtub
                </Typography>
              </Grid>
            </div>
            <Typography>
              Room Photos and Details
            </Typography>
          </div>
        </div>
        <div>
          <Typography component="div">
            Todays best offer
          </Typography>
          <Typography component="div">
            from 899 / night
          </Typography>
          <Button variant="outlined" >Book Now</Button>
        </div>
      </Card>
    ))}</>)
}

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
    borderBottom: "2px solid #297cbb",
    color: "#297cbb",
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
