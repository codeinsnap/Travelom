//Card with tabs
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CustomCard from "../card/CustomCard";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import './tablistview.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CardFive() {
  return (
      <Grid
        container
        spacing={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={2} >
          <div  className="tablist-card">
          <CustomCard/>
          </div>
        </Grid>
        <Grid item xs={2}>
        <div  className="tablist-card">
          <CustomCard />
        </div>
        </Grid>
        <Grid item xs={2}>
        <div  className="tablist-card">
          <CustomCard />
        </div>
        </Grid>
        <Grid item xs={2}>
          <div  className="tablist-card">
          <CustomCard />
        </div>
        </Grid>
        <Grid item xs={2}>
          <div  className="tablist-card">
          <CustomCard />
        </div>
        </Grid>
      </Grid>
  );
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const TabListView = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Box className="mainContainer" sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            value={1}
            label="New York"
            style={{ fontSize: "medium", marginRight: "4%", fontWeight: "600" }}
          />
          <Tab
            value={2}
            label="Hong Kong"
            style={{ fontSize: "medium", marginRight: "4%", fontWeight: "600" }}
          />
          <Tab
            value={3}
            label="Shangai"
            style={{ fontSize: "medium", marginRight: "4%", fontWeight: "600" }}
          />
          <Tab
            value={4}
            label="Bangkok"
            style={{ fontSize: "medium", marginRight: "4%", fontWeight: "600" }}
          />
          <Tab
            value={5}
            label="Tokyo"
            style={{ fontSize: "medium", marginRight: "4%", fontWeight: "600" }}
          />
          <Tab
            value={6}
            label="Paris"
            style={{ fontSize: "medium", marginRight: "4%", fontWeight: "600" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={1} className="recomendedcard">
        <CardFive />
      </TabPanel>
      <TabPanel value={value} index={2} className="recomendedcard">
        <CardFive />
      </TabPanel>
      <TabPanel value={value} index={3} className="recomendedcard">
        <CardFive />
      </TabPanel>
      <TabPanel value={value} index={4} className="recomendedcard">
        <CardFive />
      </TabPanel>
      <TabPanel value={value} index={5} className="recomendedcard">
        <CardFive />
      </TabPanel>
      <TabPanel value={value} index={6} className="recomendedcard">
        <CardFive />
      </TabPanel>
    </Box>
  );
};

export default TabListView;
