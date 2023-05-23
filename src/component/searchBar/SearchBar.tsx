import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./searchbar.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate()
  return (
    <Card className="search-card" style={{ padding: "1%" }}>
      <Grid container spacing={3} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}>
        <Grid item xs={3}>
          <Typography variant="h6" component="h4">
            Destination or Hotel Name
          </Typography>
          <TextField
            id="standard-basic"
            label="Where you are going ?"
            variant="standard"
          />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" component="h4">
            Check In - Out
          </Typography>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" component="h4">
            Rooms and Guests
          </Typography>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" onClick={() => navigate('/hotel-details')}>
            <SearchIcon /> Search
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SearchBar;
