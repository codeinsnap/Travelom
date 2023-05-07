import React from 'react'
import BreadCrumb from '../component/breadcrumb/BreadCrumb';
import Carousel from '../component/carousel/Carousel';
import hotelimages from '../assets/img/960x490/img1.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const list = [
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages
  },
  {
    location: "Istanbul, Turkey",
    rating: "5",
    hotelName: "New York Marriott Downtown",
    reviews: [],
    price: "899.00 / night",
    image: hotelimages
  },
];

const HotelDetails = () => {

  return (
    <Box sx={{ flexGrow: 1, paddingTop:"5%" }}>
      <Grid container spacing={2} flexDirection={'column'}>
        <Grid item xs={2} >
          <BreadCrumb data={[{ title: "Home", link: "/" }, { title: "Hotels" }]} />
        </Grid>
        <Grid item xs={8}>
          <Carousel
            list={list}
            spaceBetween={25}
            slidesPerView={1}
            cardTextContent={false}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HotelDetails
