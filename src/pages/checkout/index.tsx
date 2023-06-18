import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import CustomerInformation from "./CustomerInformation";
import HotelSummary from "./HotelSummary";
import Grid from "@mui/material/Grid";
import BookingConfirmation from "./BookingConfirmation";
import PaymentInformation from "./PaymentInformation";
import CheckIcon from "@mui/icons-material/Check";

const Index = () => {
  const [currentStatus, setCurrentStatus] = useState(1);
  const [component, setComponent] = useState(<CustomerInformation />);

  useEffect(() => {
    if (currentStatus === 1) {
      setComponent(<CustomerInformation setCurrentStatus={setCurrentStatus} />);
    } else if (currentStatus === 2) {
      setComponent(<PaymentInformation setCurrentStatus={setCurrentStatus} />);
    } else {
      setComponent(<BookingConfirmation setCurrentStatus={setCurrentStatus} />);
    }
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
  }, [currentStatus]);
  return (
    <Grid
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "5%",
        paddingRight: "5%",
        backgroundColor: "#ebf0f7",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Grid style={{ width: "80%" }}>
        <Card style={{ marginRight: "2%" }}>
          <ConfirmationStatus currentStatus={currentStatus} />
          <Divider />
          <CardContent>{component}</CardContent>
        </Card>
      </Grid>
      <Grid style={{ width: "20%" }}>
        <Card>
          <HotelSummary />
        </Card>
      </Grid>
    </Grid>
  );
};

function ConfirmationStatus({ currentStatus }: any) {
  const contentList = [
    {
      id: 1,
      step: 1,
      title: "Customer Information",
    },
    {
      id: 2,
      step: 2,
      title: "Payment Information",
    },
    {
      id: 3,
      step: 3,
      title: "Booking is Information",
    },
  ];

  if (currentStatus === 3) {
    return (
      <div
        style={{
          display: "flex",
          alignContent: "start",
          flexWrap: "wrap",
          padding: "3% 5%",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#297cbb",
            color: "white",
            border: "1px solid #ebf0f7",
            width: 50, height: 50
          }}
        >
          <CheckIcon fontSize="large"/>
        </Avatar>
        <div style={{marginLeft:"1rem"}}>
          <Typography variant="h5" style={{ color:'#3b444f' }}>
            Thank You. Your Booking Order is Confirmed Now.
          </Typography>
          <Typography style={{ color:'#77838f' }}>
            A confirmation email has been sent to your provided email address.
          </Typography>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "flex-end",
          flexWrap: "wrap",
          padding: "2% 5%",
        }}
      >
        {contentList.map((item: any) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2%",
            }}
          >
            <Avatar
              sx={{
                bgcolor: currentStatus === item.step ? "#297cbb" : "white",
                color: currentStatus === item.step ? "white" : "black",
                border: "1px solid #ebf0f7",
                marginBottom: "3%",
              }}
            >
              {item.step}
            </Avatar>
            <Typography color={currentStatus === item.step ? "#297cbb" : ""}>
              {item.title}
            </Typography>
          </div>
        ))}
      </div>
    );
  }
}

export default Index;
