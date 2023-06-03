import React from "react";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { List, Typography } from "@mui/material";
import FilterOptions from "./FilterOptions";

const sideBarFilter = () => {
  return (
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
      <FilterOptions />
    </Grid>
  );
};

export default sideBarFilter;