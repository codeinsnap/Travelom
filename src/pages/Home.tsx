import React from "react";
import "../assets/css/home.css";
import { Typography } from "@mui/material";
import SearchBar from "../component/searchBar/SearchBar";
import Carousel from "../component/carousel/Carousel";
import RandomCard from "../component/randomCard/RandomCard";
import TabListView from "../component/tablistview/TabListView";
import Button from "@mui/material/Button";
import Testimonials from "../component/testimonials/Testimonials";

const list = [
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
  },
];

const Home = () => {
  return (
    <div>
      <div className="main-home-page">
        <div style={{ marginTop: "15%" }}>
          <Typography variant="h3" component="h2" color="white">
            Find Your Ideal Hotel and Compare Prices
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            color="white"
            marginTop={"1%"}
          >
            Check out the best deals on over 2,000,000 hotels worldwide
          </Typography>
        </div>
      </div>

      <div className="second-home-page">
        <SearchBar />
      </div>

      {/* Hotel Card Carousel */}
      <div
        className="carosuel-container"
        style={{ paddingLeft: "5%", paddingRight: "5%", marginTop: "7%" }}
      >
        <Typography variant="h4" component="h2" className="popularHotel">
          Most Popular Hotels
        </Typography>
        <Carousel list={list} spaceBetween={25} slidesPerView={5} />
      </div>

      {/* Popular Destination */}
      <div
        className="destination-container"
        style={{ paddingLeft: "5%", paddingRight: "5%", marginTop: "7%" }}
      >
        <Typography variant="h4" component="h2" className="popularHotel">
          Popular Destination
        </Typography>
        <RandomCard />
      </div>
      {/* Moving Image */}
      <div className="image-container-second">
        <div>
          <Typography
            variant="h3"
            component="h2"
            color="white"
            sx={{ opacity: "0.6", fontSize: "1.875rem" }}
          >
            Enjoy Summer Deals
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            color="white"
            marginTop={"1%"}
            sx={{ fontSize: "3.5rem", fontWeight: "500", marginBottom: "10%" }}
          >
            Up to 40% Discount!
          </Typography>
          <Button variant="outlined" className="learnmorebutton">
            Learn More
          </Button>
        </div>
      </div>

      {/* Recommended Hotels */}
      <div style={{ marginTop: "7%" }}>
        <Typography variant="h4" component="h2" className="popularHotel">
          Recommended Hotels
        </Typography>
        <TabListView />
      </div>

      {/* Why Choose */}
      <div style={{ marginTop: "5%", marginBottom: "5%" }}>
        <Typography variant="h4" component="h2" className="popularHotel">
          Why Choose
        </Typography>
        <Testimonials/>
      </div>
    </div>
  );
};

export default Home;
