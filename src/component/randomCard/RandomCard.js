import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import largeImg from '../../assets/img/630x350/img1.jpg'
import smallImg from '../../assets/img/300x350/img2.jpg'
import './randomcard.css'
function CustomCard({size}) {
    return (
        <Card sx={{ width: "100%" }} className='randomcard-grid'>
            <CardMedia
                component="img"
                alt="green iguana"
                image={size === 'large' ? largeImg : smallImg}
            />
        </Card>
    )
}

const RandomCard = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '2%' }} className='main-box'>
            <Grid container spacing={2} className='main-grid'>
                <Grid item xs={6} >
                    <CustomCard size={'large'}/>
                </Grid>
                <Grid item xs={3}>
                    <CustomCard size={'small'}/>
                </Grid>
                <Grid item xs={3}>
                    <CustomCard size={'small'}/>
                </Grid>
                <Grid item xs={3}>
                    <CustomCard size={'small'}/>
                </Grid>
                <Grid item xs={3}>
                    <CustomCard size={'small'}/>
                </Grid>
                <Grid item xs={6}>
                    <CustomCard size={'large'}/>
                </Grid>
            </Grid>
        </Box>
  )
}

export default RandomCard