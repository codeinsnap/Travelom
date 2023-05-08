import React from "react";
import { Card, CardContent } from "@mui/material";
import "swiper/css";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import PlaceIcon from "@mui/icons-material/Place";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./customcard.css";
import CustomHeartIcon from "./CustomHeartIcon";

function CustomStar(props) {
  const { value } = props;
  if (value) {
    return Array.apply(null, { length: value }).map((e, i) => (
      <StarIcon
        fontSize="small"
        color="success"
        sx={{ fontSize: "100%", marginRight: "5%" }}
      />
    ));
  } else {
    return Array.apply(null, { length: 5 }).map((e, i) => (
      <StarBorderIcon
        fontSize="small"
        color="success"
        sx={{ fontSize: "100%", marginRight: "5%" }}
      />
    ));
  }
}

const CustomCard = (props) => {
  const { cardData, cardImage, cardTextContent } = props;
  return (
    <Card>
      <CardContent sx={{ padding: 0 }}>
        <div className="imageicon">
          <CustomHeartIcon />
          <img src={cardImage} className="cardimage" width={"100%"} />
          {cardTextContent && (<Typography className="imageText">
            <PlaceIcon fontSize="large" sx={{ fontSize: "28px" }} />
            {cardData.location}
          </Typography>)}
        </div>
        {cardTextContent && (<div className="textcontainer">
          <div className="star-container">
            <CustomStar value={5} />
          </div>
          <div className="card-title-container">
            <span className="hotel-title">{cardData.hotelName}</span>
            <div className="review-container">
              <Typography className="ratingcontainer">4.6/5</Typography>
              <span> (166 reviews) </span>
            </div>
          </div>
          <div className="tweet_container">{cardData.price}</div>
        </div>)}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
