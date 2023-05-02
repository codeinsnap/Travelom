import React from 'react'
import Grid from "@mui/material/Grid";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Typography } from "@mui/material";
import './testimonials.css'
const Testimonials = () => {
    return (
        <Grid
            container
            spacing={1}
            className='testimonials-grid-container'
        >
            <Grid
                item
                xs={3}
                className='testimonials-grid-one'
            >
                <MonetizationOnIcon
                    fontSize={"inherit"}
                    color={"primary"}
                    style={{ fontSize: 100 }}
                />
                <Typography sx={{ margin: "2% 0" }}>
                    Competitive Pricing
                </Typography>
                <Typography sx={{ textAlign: "center", margin: "2% 0" }}>
                    With 500+ suppliers and the purchasing power of 300 million
                    members, mytravel.com can save you more!
                </Typography>
            </Grid>
            <Grid
                item
                xs={3}
                className='testimonials-grid-one'
            >
                <MilitaryTechIcon
                    fontSize={"inherit"}
                    color={"primary"}
                    style={{ fontSize: 100 }}
                />
                <Typography className='testimonial-title'>
                    Award-Winning Service
                </Typography>
                <Typography className='testimonial-paragraph'>
                    Travel worry-free knowing that we're here if you needus, 24
                    hours a day
                </Typography>
            </Grid>
            <Grid
                item
                xs={3}
                className='testimonials-grid-one'
            >
                <TravelExploreIcon
                    fontSize={"inherit"}
                    color={"primary"}
                    style={{ fontSize: 100 }}
                />
                <Typography className='testimonial-title'>
                    Worldwide Coverage
                </Typography>
                <Typography className='testimonial-paragraph'>
                    Over 1,200,000 hotels in more than 200 countries and regions &
                    flights to over 5,000 cities
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Testimonials