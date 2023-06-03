import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CustomCard from "../../component/card/CustomCard";
import { Hotelslist } from "../../constants/staticData";
import "../../assets/css/hotelwithsearchfilter.css";
import Button from "@mui/material/Button";
import AppsIcon from "@mui/icons-material/Apps";
import {
  Typography,
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HotelCardWithCarousel from "./HotelCardWithCarousel";
import "./searchFilterPage.css";
import TopBarFilter from "./topBarFilter/TopBarFilter";
import SideBarFilter from "./sideBar/SideBarFilter";

const HotelWithSearchFilter = () => {
  const [view, setView] = useState("list");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        <Grid container style={{ display: "flex" }}>
          <SideBarFilter/>
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
            <TopBarFilter />
            {view === "grid" ? (
              <HotelSearchedList />
            ) : (
              <HotelCardWithCarousel />
            )}
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