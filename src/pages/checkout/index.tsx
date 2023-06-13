import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import CustomerInformation from "./CustomerInformation";
import HotelSummary from "./HotelSummary";
import Grid from "@mui/material/Grid";

const Index = () => {
  const [currentStatus, setCurrentStatus] = useState(1);
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
      <Grid>
        <Card style={{ marginRight: "2%" }}>
          <ConfirmationStatus currentStatus={currentStatus} />
          <Divider />
          <CardContent>
            <CustomerInformation />
          </CardContent>
        </Card>
      </Grid>
      <Grid style={{width:"30%"}}>
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

export default Index;
