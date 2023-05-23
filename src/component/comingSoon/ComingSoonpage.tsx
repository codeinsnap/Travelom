import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import mytravelicon from "../../assets/fonts/travelicon.svg";

const ComingSoonpage = () => {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: "12%" }}>
      <div
        style={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontSize={50}
          style={{
            display: "flex",
            alignItems: "center",
            color: "#297cbb",
            width: "22%",
            marginRight:"2%"
          }}
        >
          <img
            src={mytravelicon}
            style={{ width: "100%", marginRight: "2%" }}
            alt=""
          />
          MyTravel
        </Typography>
        <Typography variant="h3" component="h2">
          Comming Soon...
        </Typography>
      </div>
    </Box>
  );
};

export default ComingSoonpage;
