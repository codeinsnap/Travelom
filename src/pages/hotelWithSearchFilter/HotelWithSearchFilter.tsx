import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CustomCard from "../../component/card/CustomCard";
import { Hotelslist } from "../../constants/staticData";
import "../../assets/css/hotelwithsearchfilter.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CallIcon from "@mui/icons-material/Call";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import WineBarIcon from "@mui/icons-material/WineBar";
import ChairIcon from "@mui/icons-material/Chair";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import VerticalLine from "../../component/verticalLine/VerticalLine";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { SelectHotelRoomCard } from "../../constants/staticData";
import HotelCardWithCarousel from "./HotelCardWithCarousel";

const HotelWithSearchFilter = () => {
  const [view, setView] = useState("list");
  return (
    <Box sx={{ flexGrow: 1, paddingTop: "12%" }}>
      <div style={{ borderTop: "1px solid gray", opacity: "0.3" }}></div>
      <div>
        <Grid container style={{ display: "flex" }}>
          <Grid item xs={3} style={{ padding: "3% 0% 0% 6%" }}>
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
                <hr
                  color="#b9b9b9"
                  style={{ opacity: "0.2", margin: "1% 0" }}
                />
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
          <Grid item xs={8.5} style={{ padding: "3% 2% 4% 2%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h5"
                style={{
                  fontSize: "1.313rem",
                  fontWeight: "500",
                  color: "#3b444f",
                }}
              >
                London: 3292 hotels found
              </Typography>
              <div style={{ display: "flex" }}>
                <Button onClick={() => setView("list")}>
                  <FormatListBulletedIcon
                    style={{
                      color: `${view !== "list" ? "#67747c" : "#297cbb"}`,
                      fontSize: "1.8rem",
                    }}
                  />
                </Button>
                <Button onClick={() => setView("grid")}>
                  <AppsIcon
                    style={{
                      color: `${view !== "grid" ? "#67747c" : "#297cbb"}`,
                      fontSize: "1.8rem",
                    }}
                  />
                </Button>
              </div>
            </div>
            <NavHotelFilterBar />
            {view === "grid" ? <HotelSearchedList /> : <HotelCardWithCarousel />}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default HotelWithSearchFilter;

function HotelSearchedList() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Hotelslist.map((item: any) => (
        <div className="search_hotel_card" style={{ padding: "2% 0" }}>
          <CustomCard
            cardData={item}
            cardImage={item.image}
            cardTextContent={true}
          />
        </div>
      ))}
    </div>
  );
}

function NavHotelFilterBar() {
  const listCss: any = {
    display: "flex",
    flexWrap: "wrap",
    border: "1px solid #e7eaf3",
    borderRadius: "3px",
    margin: "1% 2% 1% 0%",
  };

  const list = [
    "Recommended",
    "Price",
    "Stars",
    "Guest Rating",
    "Distance",
    "Top Reviewed",
  ];
  return (
    <List style={listCss}>
      {list.map((hotelservice: any, index: any) => (
        <ListItemButton
          style={{
            display: "flex",
            justifyContent: "center",
            borderRight: `${list.length - 1 !== index && "1px solid #e7eaf3"}`,
          }}
          key={index}
        >
          <Typography
            style={{
              color: "#67747c",
              fontFamily: '"Rubik", Helvetica, Arial, sans-serif',
            }}
          >
            {hotelservice}
          </Typography>
        </ListItemButton>
      ))}
    </List>
  );
}