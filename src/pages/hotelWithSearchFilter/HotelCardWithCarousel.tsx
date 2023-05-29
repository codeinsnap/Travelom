import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Hotelslist } from "../../constants/staticData";
import Card from "@mui/material/Card";
import {
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import CustomHeartIcon from "../../component/card/CustomHeartIcon";

const HotelCardWithCarousel = () => {
  return (
    <div>
      {Hotelslist.map((data: any) => (
        <Card
          style={{
            margin: "4% 2% 4% 0",
            display: "flex",
            border: "1px solid #e7eaf3",
          }}
        >
          <Grid xs={4}>
            <ImageCarousel images={data?.images} />
          </Grid>
          <Grid xs={5.6} style={{ display: "flex", alignItems: "center" }}>
            <HotelDetails data={data} />
          </Grid>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "3% 0% 3% 0%",
              padding: "0% 0% 0% 1%",
              justifyContent: "space-between",
              borderLeft: "1px solid #e7eaf3",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  color: "white",
                  backgroundColor: "#297cbb",
                  padding: "3.5%",
                  margin: "2%",
                  borderRadius: "4px",
                }}
              >
                4.6 /5
              </Typography>
              <Typography
                style={{
                  color: "#297cbb",
                }}
              >
                Very Good
              </Typography>
            </div>

            <div
              style={{
                display: "grid",
                justifyItems: "end",
              }}
            >
              <Typography>(1,186 Reviews)</Typography>
              <Typography>"Good Location"</Typography>
            </div>
            <Typography>From $350.00 /night</Typography>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default HotelCardWithCarousel;

function ImageCarousel(props: any) {
  const { images } = props;
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      navigation
      style={{ marginBottom: "-2%" }}
      className="hotelListCardCarousel"
    >
      {images?.map((data: any, index: any) => (
        <SwiperSlide>
          <img src={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function HotelDetails(props: any) {
  const { data } = props;

  const handleHotelOffer = () => {
    if (data.offer === "limited") {
      return (
        <Typography
          style={{
            padding: "0 2%",
            backgroundColor: "#f05700",
            borderRadius: "3px",
            color: "white",
            fontFamily: '"Rubik", Helvetica, Arial, sans-serif',
            fontWeight: "600",
          }}
        >
          Limited Time Offer
        </Typography>
      );
    }
  };
  const handleOfferingsList = (freeBies: any) => {
    if (freeBies.tag === "highLight") {
      return (
        <div style={{ display: "flex", width: "auto" }}>
          <Typography
            style={{
              padding: "0 1%",
              border: "1px solid #28871c",
              backgroundColor: "#28871c",
              borderRadius: "3px 0 0 3px",
              color: "white",
              minWidth: "fit-content",
            }}
          >
            {freeBies.title}
          </Typography>
          <Typography
            style={{
              padding: "0 1%",
              border: "1px solid #28871c",
              borderRadius: "0 3px 3px 0",
              color: "#28871c",
              minWidth: "fit-content",
            }}
          >
            {freeBies.includes}
          </Typography>
        </div>
      );
    } else {
      return (
        <Typography
          style={{
            padding: "0 1%",
            border: "1px solid #3b444f",
            borderRadius: "3px",
            margin: "0 2% 1% 0",
            color: "#3b444f",
          }}
        >
          {freeBies.title}
        </Typography>
      );
    }
  };
  return (
    <List>
      <ListItem style={{ padding: "4px 14px 4px 20px" }}>
        {handleHotelOffer()}
        <CustomHeartIcon />
      </ListItem>
      <ListItem style={{ padding: "4px 14px 4px 20px" }}>
        <Typography style={{ color: "#3b444f", fontWeight: "500" }}>
          {data.hotelName}
        </Typography>
      </ListItem>
      <ListItem style={{ padding: "4px 14px 4px 20px" }}>
        <Typography>{data.location}</Typography>
      </ListItem>
      <ListItem style={{ flexWrap: "wrap", padding: "4px 14px 4px 20px" }}>
        {data.amenities.map((freeBies: any) => handleOfferingsList(freeBies))}
      </ListItem>
    </List>
  );
}
