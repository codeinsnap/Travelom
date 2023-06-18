import { Button, Typography } from "@mui/material";
import { useState } from "react";
import payWithCard from "../../assets/img/199x35/img1.jpg";
import payWithPaypal from "../../assets/img/199x35/img2.jpg";
import Avatar from "@mui/material/Avatar";
import CheckIcon from "@mui/icons-material/Check";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const PaymentInformation = ({ setCurrentStatus }: any) => {
  const [paymentOption, setPaymentOption] = useState(2);

  const fromlayout = {
    payOption: [
      {
        id: 1,
        text: "Payment with Card",
        img: payWithCard,
        style: { margin: "1rem 1rem 1rem 0" },
      },
      {
        id: 2,
        text: "Payment with Paypal",
        img: payWithPaypal,
        style: { margin: "1rem 0 1rem 1rem" },
      },
    ],
    formFieldsOne: [
      { label: "Card Holder Name", type: "text", width: 6 },
      { label: "Card Number", type: "number", width: 6 },
      { label: "Expiry Month", type: "number", width: 3 },
      { label: "Expiry Year", type: "number", width: 3 },
      { label: "CCV", type: "number", width: 6 },
    ],
    formFieldstwo: [
      { label: "Email", type: "text", icon: <PersonIcon />, width: 12 },
      { label: "Password", type: "password", icon: <LockIcon />, width: 12 },
    ],
  };

  const handleInputFields = () => {
    if (paymentOption === 1) {
      return fromlayout.formFieldsOne.map((item: any) => (
        <InputBoxs item={item} />
      ));
    } else {
      return fromlayout.formFieldstwo.map((item: any) => (
        <InputBoxs item={item} />
      ));
    }
  };

  return (
    <div
      style={{
        paddingLeft: "2rem",
        paddingBottom: "2rem",
        paddingRight: "2rem",
        paddingTop: "1.5rem",
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontWeight: 500,
          fontSize: "1.313rem",
          color: "#3b444f",
          marginBottom: "1.5rem",
          lineHeight: 1.5,
        }}
      >
        Your Card Information
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {fromlayout.payOption.map((btn: any) => (
          <OptionButton
            btnData={btn}
            setPaymentOption={setPaymentOption}
            paymentOption={paymentOption}
          />
        ))}
      </div>
      <Grid
        className="payment1"
        container
        spacing={2}
        style={{ marginBottom: "2%" }}
      >
        {handleInputFields()}
      </Grid>
      {paymentOption === 1 && (
        <div style={{ display: "flex", alignItems: "center", marginBottom:"1%"}}>
          <Checkbox
            sx={{
              color: "#ebf0f7",
              "&.Mui-checked": {
                color: "#297cbb",
              },
              "& .MuiSvgIcon-root": { fontSize: 28 },
            }}
          />
          <Typography
            sx={{ fontSize: "80%", fontWeight: 400, color: "#8c98a4" }}
          >
            By continuing, you agree to the
            <Link
              to=""
              style={{
                marginLeft: "3px",
                color: "#8c98a4",
                borderBottom: "1px dashed #97a4af",
                textDecoration: "none",
                backgroundColor: "transparent",
              }}
            >
              Terms and Conditions
            </Link>
          </Typography>
        </div>
      )}
      <Button
        variant="contained"
        onClick={() => setCurrentStatus(3)}
        style={{
          backgroundColor: "#297cbb",
          borderColor: "#297cbb",
          boxShadow: "0 4px 11px rgba(41, 124, 187, 0.35)",
          color: "#fff",
          fontWeight: 500,
          fontSize: "1rem",
          width: "100%",
          paddingBottom: "1rem",
          paddingTop: "1rem",
          borderRadius: "0.25rem",
          textTransform: "none",
        }}
      >
        Confirm Booking
      </Button>
    </div>
  );
};

function OptionButton({ btnData, paymentOption, setPaymentOption }: any) {
  return (
    <>
      <Button
        variant="outlined"
        onClick={() => setPaymentOption(btnData.id)}
        key={btnData.id}
        style={{
          borderWidth: "2px",
          borderColor: "#297cbb",
          padding: "2.5rem 3rem",
          color: "#297cbb",
          margin: btnData.style.margin,
        }}
      >
        {paymentOption === btnData.id && (
          <Avatar
            sx={{
              bgcolor: "#297cbb",
              color: "white",
              border: "1px solid #ebf0f7",
              width: 25,
              height: 25,
              position: "absolute",
              top: "5px",
              left: "6px",
              margin: "5px",
            }}
          >
            <CheckIcon fontSize="small" />
          </Avatar>
        )}
        <div style={{ minWidth: "19rem" }}>
          <img src={btnData.img} alt={"Payment with Card"} />
          <Typography>{btnData.text}</Typography>
        </div>
      </Button>
    </>
  );
}

function InputBoxs({ item }: any) {
  return (
    <Grid item xs={item.width}>
      <InputLabel htmlFor={`paymentOption-${item.label}`}>
        {item.label}
      </InputLabel>
      <Input
        fullWidth
        type={item.type}
        disableUnderline={true}
        startAdornment={
          item?.icon && (
            <InputAdornment position="start">{item.icon}</InputAdornment>
          )
        }
        sx={{
          borderRadius: "0.3125rem",
          fontSize: "0.875rem",
          border: "2px solid #ebf0f7",
          color: "#3b444f",
          padding: "0.9rem 1rem",
        }}
      />
    </Grid>
  );
}

export default PaymentInformation;
