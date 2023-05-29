import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CustomCard from "../../component/card/CustomCard";
import { Hotelslist } from "../../constants/staticData";
import "../../assets/css/hotelwithsearchfilter.css";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AppsIcon from "@mui/icons-material/Apps";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HotelCardWithCarousel from "./HotelCardWithCarousel";
import "./searchFilterPage.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";

const HotelWithSearchFilter = () => {
  const [view, setView] = useState("list");
  return (
    <Box sx={{ flexGrow: 1, paddingTop: "12%" }}>
      <div style={{ borderTop: "1px solid gray", opacity: "0.3" }}></div>
      <div>
        <Grid container style={{ display: "flex" }}>
          <Grid item xs={3} style={{ padding: "3% 0% 0% 6%" }}>
            <Card className="singleHotel-room-search">
              <List>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    width: "100%",
                    flexWrap: "wrap",
                    margin: "9% 0",
                  }}
                >
                  <Typography>From</Typography>
                  <Typography style={{ fontSize: "22px", margin: "0 4%" }}>
                    $350.00
                  </Typography>
                  <Typography>/ night</Typography>
                </div>
                <hr color="#b9b9b9" style={{ opacity: "0.2" }} />
                <div className="singleHotel-room-search-div">
                  <Typography component="h4">Check In - Out</Typography>
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                  />
                </div>
                <hr
                  color="#b9b9b9"
                  style={{ opacity: "0.2", margin: "1% 0" }}
                />
                <div className="singleHotel-room-search-div">
                  <Typography component="h4">Rooms and Guests</Typography>
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                  />
                </div>
              </List>
              <Button variant="contained" style={{ padding: "5% 24%" }}>
                <SearchIcon /> Search
              </Button>
            </Card>
            <SideNavFilterList />
          </Grid>
          <Grid item xs={8.5} style={{ padding: "3% 2% 4% 2%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h5"
                style={{
                  fontSize: "1.313rem",
                  fontWeight: "500",
                  color: "#3b444f",
                }}
              >
                London: 3292 hotels found
              </Typography>
              <div style={{ display: "flex" }}>
                <Button onClick={() => setView("list")}>
                  <FormatListBulletedIcon
                    style={{
                      color: `${view !== "list" ? "#67747c" : "#297cbb"}`,
                      fontSize: "1.8rem",
                    }}
                  />
                </Button>
                <Button onClick={() => setView("grid")}>
                  <AppsIcon
                    style={{
                      color: `${view !== "grid" ? "#67747c" : "#297cbb"}`,
                      fontSize: "1.8rem",
                    }}
                  />
                </Button>
              </div>
            </div>
            <NavHotelFilterBar />
            {view === "grid" ? (
              <HotelSearchedList />
            ) : (
              <HotelCardWithCarousel />
            )}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default HotelWithSearchFilter;

function HotelSearchedList() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Hotelslist.map((item: any) => (
        <div className="search_hotel_card" style={{ padding: "2% 0" }}>
          <CustomCard
            cardData={item}
            cardImage={item.image}
            cardTextContent={true}
          />
        </div>
      ))}
    </div>
  );
}

function NavHotelFilterBar() {
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
  return (
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
  );
}
function valuetext(value: number) {
  return `${value}°C`;
}
function SideNavFilterList() {
  // Star Rating
  const [value, setValue] = useState<number | null>(2);

  //Price Range
  const [priceRangeValue, setPriceRangeValue] = useState<number[]>([20, 37]);

  const handlePriceRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setPriceRangeValue(newValue as number[]);
  };

  const accordianList = [
    {
      id: 1,
      accordianTitle: "Star Rating",
      component: (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      ),
      optionsList: [],
    },
    {
      id: 2,
      accordianTitle: "Price Range ($)",
      component: (
        <div>
          <Typography>
            {`$${priceRangeValue[0]} - $${priceRangeValue[1]}`}
          </Typography>
          <Slider
            getAriaLabel={() => "Price range"}
            value={priceRangeValue}
            onChange={handlePriceRangeChange}
            getAriaValueText={valuetext}
            max={3456}
          />
        </div>
      ),
      optionsList: [],
    },
    {
      id: 3,
      accordianTitle: "Meals",
      component: (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      ),
      optionsList: [
        { title: "Breakfast Included", value: 749 },
        { title: "All-inclusive", value: 630 },
        { title: "Breakfast & dinner included", value: 58 },
        { title: "Kitchen facilities", value: 749 },
      ],
    },
    {
      id: 4,
      accordianTitle: "Facilites",
      component: (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      ),
      optionsList: [
        { title: "Parking", value: 749 },
        { title: "Restaurant", value: 630 },
        { title: "Pet friendly", value: 58 },
        { title: "Room service", value: 29 },
        { title: "Gucci", value: 5 },
        { title: "Mango", value: 1 },
      ],
    },
    {
      id: 5,
      accordianTitle: "Property Type",
      component: (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      ),
      optionsList: [
        { title: "Parking", value: 749 },
        { title: "Restaurant", value: 630 },
        { title: "Pet friendly", value: 58 },
        { title: "Room service", value: 29 },
        { title: "Gucci", value: 5 },
        { title: "Mango", value: 1 },
      ],
    },
    {
      id: 6,
      accordianTitle: "City",
      component: (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      ),
      optionsList: [
        { title: "Parking", value: 749 },
        { title: "Restaurant", value: 630 },
        { title: "Pet friendly", value: 58 },
        { title: "Room service", value: 29 },
        { title: "Gucci", value: 5 },
        { title: "Mango", value: 1 },
      ],
    },
  ];

  const accordianCss = {
    padding: "5%",
  };

  const hanldeComponentRender = (item: any) => {
    if (item.optionsList.length > 0) {
      return <CheckBoxListRender item={item} />;
    } else {
      return item.component;
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <List component="nav" aria-label="main mailbox folders">
        {accordianList.map((item: any) => (
          <Accordion key={item.id} defaultExpanded style={accordianCss}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{item.accordianTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails>{hanldeComponentRender(item)}</AccordionDetails>
          </Accordion>
        ))}
      </List>
    </Box>
  );
}

function CheckBoxListRender({ item }: any) {
  const [show, setShow] = useState(false);
  const [newList, setNewList] = useState([]);
  useEffect(() => {
    if (show) {
      setNewList(item.optionsList);
    } else {
      setNewList(item.optionsList.slice(0, 4));
    }
  }, [item, show]);

  return (
    <>
      <List sx={{ width: "100%" }}>
        {newList.map((data: any) => (
          <ListItem key={data.id} disablePadding>
            <ListItemButton
              role={undefined}
              dense
              style={{
                padding: "0 3%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ListItemIcon style={{ minWidth: "auto" }}>
                <Checkbox edge="start" disableRipple />
              </ListItemIcon>
              <ListItemText primary={data.title} style={{ color: "#77838f" }} />
              <ListItemText
                primary={data.value}
                style={{ display: "contents", color: "#77838f " }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        style={{ textTransform: "none", color: "#297cbb" }}
        onClick={() => setShow(!show)}
      >
        {show ? "Show Less" : `Show All ${item.optionsList.length}`}
      </Button>
    </>
  );
}
