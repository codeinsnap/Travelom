import React from "react";
import "../assets/css/home.css";
import { TextField, Typography } from "@mui/material";
import SearchBar from "../component/searchBar/SearchBar";
import Carousel from "../component/carousel/Carousel";
import RandomCard from "../component/randomCard/RandomCard";
import TabListView from "../component/tablistview/TabListView";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PhoneIcon from "@mui/icons-material/Phone";

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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            spacing={1}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <MonetizationOnIcon
                fontSize={"inherit"}
                color={"primary"}
                style={{ fontSize: 100 }}
              />
              <Typography sx={{ margin: "2% 0" }}>
                Competitive Pricing
              </Typography>
              <Typography sx={{ textAlign: "center", margin: "2% 0" }}>
                With 500+ suppliers and the purchasing power of 300 million
                members, mytravel.com can save you more!
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <MilitaryTechIcon
                fontSize={"inherit"}
                color={"primary"}
                style={{ fontSize: 100 }}
              />
              <Typography sx={{ margin: "2% 0" }}>
                Award-Winning Service
              </Typography>
              <Typography sx={{ textAlign: "center", margin: "2% 0" }}>
                Travel worry-free knowing that we're here if you needus, 24
                hours a day
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TravelExploreIcon
                fontSize={"inherit"}
                color={"primary"}
                style={{ fontSize: 100 }}
              />
              <Typography sx={{ margin: "2% 0" }}>
                Worldwide Coverage
              </Typography>
              <Typography sx={{ textAlign: "center", margin: "2% 0" }}>
                Over 1,200,000 hotels in more than 200 countries and regions &
                flights to over 5,000 cities
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
      {/* Footer */}
      <div style={{ marginTop: "5%", marginBottom: "5%" }}>
        <hr color="#b9b9b9" style={{ opacity: "0.6" }} />
        <Grid
          container
          spacing={2.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <Grid
            item
            xs={2.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography className="footer-title">
              Need My Travel Help?
            </Typography>
            <Typography
              className="footer-title-temp"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <PhoneIcon
                fontSize={"inherit"}
                color={"primary"}
                style={{ fontSize: 60 }}
              />
              Got Questions ? Call us 24/7!
            </Typography>
            <Typography className="footer-title">Contact Info</Typography>
            <Typography className="footer-title-temp">
              PO Box CT16122 Collins Street West, Victoria 8007,Australia.
            </Typography>
          </Grid>
          <Grid
            item
            xs={1.8}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography className="footer-title">Company</Typography>

            <Typography className="footer-links">About us</Typography>
            <Typography className="footer-links">Careers</Typography>
            <Typography className="footer-links">Terms of Use</Typography>
            <Typography className="footer-links">Privacy Statement</Typography>
            <Typography className="footer-links">Give Us Feedbacks</Typography>
          </Grid>
          <Grid
            item
            xs={1.8}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography className="footer-title">Other Services</Typography>

            <Typography className="footer-links">Investor Relations</Typography>
            <Typography className="footer-links">Rewards Program</Typography>
            <Typography className="footer-links">PointsPLUS</Typography>
            <Typography className="footer-links">Partners</Typography>
            <Typography className="footer-links">List My Hotel</Typography>
          </Grid>
          <Grid
            item
            xs={1.8}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography className="footer-title">Support</Typography>

            <Typography className="footer-links">Account</Typography>
            <Typography className="footer-links">Legal</Typography>
            <Typography className="footer-links">Contact</Typography>
            <Typography className="footer-links">Affiliate Program</Typography>
            <Typography className="footer-links">Privacy Policy</Typography>
          </Grid>
          <Grid
            item
            xs={2.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography className="footer-title">Mailing List</Typography>
            <Typography className="footer-links-mail">
              Sign up for our mailing list to get latest updates and offers.
            </Typography>
            <div style={{ display: "flex" }}>
              <TextField
                placeholder="Your Email"
                style={{ marginRight: "3%" }}
              />
              <Button variant="contained" color="primary">
                Subscribes
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <hr color="#b9b9b9" style={{ opacity: "0.6" }} />
    </div>
  );
};

export default Home;
