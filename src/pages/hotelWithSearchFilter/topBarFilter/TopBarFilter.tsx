import React, { useEffect, useState } from "react";
import {
  List,
  ListItemButton,
  Typography,
} from "@mui/material";

const TopBarFilter = () => {
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

  return(
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
  )
};

export default TopBarFilter;
