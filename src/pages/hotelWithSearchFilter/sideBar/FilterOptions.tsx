import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";

function valuetext(value: number) {
  return `${value}°C`;
}


const FilterOptions = () => {
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
  )
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


export default FilterOptions