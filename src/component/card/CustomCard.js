import React from "react";
import { Card, CardContent } from "@mui/material";
import "swiper/css";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import test from "../../assets/img/300x230/img9.jpg";
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
  const { cardData, cardChange } = props;
  return (
    <Card>
      <CardContent sx={{ padding: 0 }}>
        <div className="imageicon">
          <CustomHeartIcon />
          <img src={test} width={"100%"} />
          <Typography className="imageText">
            <PlaceIcon fontSize="large" sx={{ fontSize: "28px" }} />
            Istanbul, Turkey
          </Typography>
        </div>
        <div className="textcontainer">
            <div className="star-container">
              <CustomStar value={5} />
            </div>
          <div className="card-title-container">
            <span className="hotel-title"> New York Marriott Downtown </span>
            <div className="review-container">
              <Typography className="ratingcontainer">4.6/5</Typography>
              <span> (166 reviews) </span>
            </div>
          </div>
          <div className="tweet_container">From $899.00 / night</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
