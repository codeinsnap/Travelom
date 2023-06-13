import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import summaryImg from "../../assets/img/240x160/img3.jpg";
import PlaceOutlined from "@mui/icons-material/PlaceOutlined";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const HotelSummary = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const accordianList = [
    {
      id: 1,
      title: "Booking Details",
      componentId: "panel1bh-header",
      arialControls: "panel1bh-content",
      panelNumber: "panel1",
      component: <BookingInformation />,
    },
    {
      id: 2,
      title: "Extra",
      componentId: "panel2bh-header",
      arialControls: "panel2bh-content",
      panelNumber: "panel2",
      component: <TempCOmp />,
    },
    {
      id: 3,
      title: "Coupon Code",
      componentId: "panel3bh-header",
      arialControls: "panel3bh-content",
      panelNumber: "panel3",
      component: <CuponeCodeComponent />,
    },
    {
      id: 4,
      title: "Payment",
      componentId: "panel4bh-header",
      arialControls: "panel4bh-content",
      panelNumber: "panel4",
      component: <PaymentComponent />,
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "8%",
        }}
      >
        <img src={summaryImg} />
        <Typography style={{ margin: "4% 0%" }}>
          Park Avenue Baker Street London
        </Typography>
        <Typography
          style={{
            display: "flex",
            color: "#67747c",
            width: "-webkit-fill-available",
          }}
        >
          <PlaceOutlined fontSize="small" style={{ padding: "1%" }} />
          United Kingdom
        </Typography>
      </div>
      {accordianList.map((item: any) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.panelNumber}
          onChange={handleChange(item.panelNumber)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={item.arialControls}
            id={item.componentId}
          >
            <Typography sx={{ flexShrink: 0 }}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.component}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

function CuponeCodeComponent() {
  return (
    <div style={{ display: "flex" }}>
      <TextField
        fullWidth
        type="number"
        id="outlined-basic"
        variant="outlined"
        placeholder={"code"}
        style={{ paddingRight: "8%" }}
      />
      <Button
        color="primary"
        variant="contained"
        style={{
          minWidth: "4.75rem",
          paddingBottom: "1rem",
          paddingTop: "1rem",
        }}
      >
        Apply
      </Button>
    </div>
  );
}

function PaymentComponent() {
  const rows = [
    { title: "Subtotal", value: "€580,00" },
    { title: "Extra Price", value: "€0,00" },
    { title: "Tax", value: "0%" },
    { title: "Pay Amount", value: "€580,00" },
  ];
  return (
    <TableContainer component={Paper} style={{ boxShadow: "none" }}>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right" style={{color:"#77838f"}}>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function BookingInformation() {
  const rows = [
    { title: "Stay", value: "7 Night" },
    { title: "Room", value: "2 Room" },
    { title: "Adult", value: "4" },
  ];
  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <Typography style={{paddingRight:"8%"}}>22 Sep 2019 - 23 Sep 2019</Typography>
        <Link to="/*" style={{paddingRight:"0 8%"}}>Edit</Link>
      </div>
      <TableContainer component={Paper} style={{ boxShadow: "none" }}>
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right" style={{color:"#77838f"}}>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function TempCOmp() {
  return (
    <Typography>
      Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
      Aliquam eget maximus est, id dignissim quam.
    </Typography>
  );
}
export default HotelSummary;
