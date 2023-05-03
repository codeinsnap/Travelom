import React from 'react'
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";
import './footer.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CopyrightIcon from '@mui/icons-material/Copyright';
import mytravelicon from '../../assets/fonts/travelicon.svg'
const Footer = () => {
    return (
        <>
            <hr color="#b9b9b9" style={{ opacity: "0.6" }} />
            <Grid
                container
                spacing={2.5}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                }}
            >
                <Grid
                    item
                    xs={2.5}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "baseline",
                    }}
                >
                    <Typography className="footer-title">
                        Need My Travel Help?
                    </Typography>
                    <Typography
                        className="footer-title-temp"
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <PhoneIcon
                            fontSize={"inherit"}
                            color={"primary"}
                            style={{ fontSize: 60 }}
                        />
                        Got Questions ? Call us 24/7!
                    </Typography>
                    <Typography className="footer-title">Contact Info</Typography>
                    <Typography className="footer-title-temp">
                        PO Box CT16122 Collins Street West, Victoria 8007,Australia.
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={1.8}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "baseline",
                    }}
                >
                    <Typography className="footer-title">Company</Typography>

                    <Typography className="footer-links">About us</Typography>
                    <Typography className="footer-links">Careers</Typography>
                    <Typography className="footer-links">Terms of Use</Typography>
                    <Typography className="footer-links">Privacy Statement</Typography>
                    <Typography className="footer-links">Give Us Feedbacks</Typography>
                </Grid>
                <Grid
                    item
                    xs={1.8}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "baseline",
                    }}
                >
                    <Typography className="footer-title">Other Services</Typography>

                    <Typography className="footer-links">Investor Relations</Typography>
                    <Typography className="footer-links">Rewards Program</Typography>
                    <Typography className="footer-links">PointsPLUS</Typography>
                    <Typography className="footer-links">Partners</Typography>
                    <Typography className="footer-links">List My Hotel</Typography>
                </Grid>
                <Grid
                    item
                    xs={1.8}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "baseline",
                    }}
                >
                    <Typography className="footer-title">Support</Typography>

                    <Typography className="footer-links">Account</Typography>
                    <Typography className="footer-links">Legal</Typography>
                    <Typography className="footer-links">Contact</Typography>
                    <Typography className="footer-links">Affiliate Program</Typography>
                    <Typography className="footer-links">Privacy Policy</Typography>
                </Grid>
                <Grid
                    item
                    xs={2.5}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "baseline",
                    }}
                >
                    <Typography className="footer-title">Mailing List</Typography>
                    <Typography className="footer-links-mail">
                        Sign up for our mailing list to get latest updates and offers.
                    </Typography>
                    <div style={{ display: "flex" }}>
                        <TextField
                            placeholder="Your Email"
                            style={{ marginRight: "3%" }}
                        />
                        <Button variant="contained" color="primary" className="footer-subscribe-button">
                            Subscribes
                        </Button>
                    </div>
                </Grid>
            </Grid>
            <hr color="#b9b9b9" style={{ opacity: "0.6" }} />
            <Grid
                container
                spacing={9}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "2%",
                    marginTop: "0%"
                }}
            >
                <Grid
                    item
                    xs={6}
                    sx={{paddingTop:"1% !important"}}
                >
                    <Typography className="footer-bottom-one-text" fontSize={35} style={{ display: 'flex', alignItems: 'center'}}>
                        <img src={mytravelicon} style={{width:'10%', marginRight: '2%'}}/>
                        MyTravel
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={5}
                    sx={{ display: "flex", paddingTop:"1% !important"}}
                >
                    <Select
                        value={10}
                        sx={{ m: 1, minWidth: 250, color: "black" }}
                    >
                        <MenuItem value="">
                            <em>Englist(United States)</em>
                        </MenuItem>
                        <MenuItem value={10}>Englist(United States)</MenuItem>
                        <MenuItem value={20}>Englist(United States)</MenuItem>
                        <MenuItem value={30}>Englist(United States)</MenuItem>
                    </Select>
                    <Select
                        value={10}
                        sx={{ m: 1, minWidth: 120, color: "black" }}
                    >
                        <MenuItem value="">
                            <em>$USD</em>
                        </MenuItem>
                        <MenuItem value={10}>$USD</MenuItem>
                        <MenuItem value={20}>$USD</MenuItem>
                        <MenuItem value={30}>$USD</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            <hr color="#b9b9b9" style={{ opacity: "0.6" }} />
            <Typography className="footer-copyright-text">
                <CopyrightIcon fontSize='inherit'/> 2020 MyTravel. All rights reserved
            </Typography>
        </>
    )
}

export default Footer