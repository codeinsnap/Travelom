import { Button, TextareaAutosize, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React from "react";

const CustomerInformation = () => {
  const inputSet = [
    {
      label: "First Name",
      inputType: "input",
      placeHolder: "First name",
    },
    {
      label: "Last Name",
      inputType: "input",
      placeHolder: "Last name",
    },
    {
      label: "Email",
      inputType: "emailInput",
      placeHolder: "creative@gmail.com",
    },
    {
      label: "Phone",
      inputType: "phoneInput",
      placeHolder: "90 (254) 458 96 52",
    },
    {
      label: "Country",
      inputType: "dropdown",
      placeHolder: "India",
    },
    {
      label: "City",
      inputType: "dropdown",
      placeHolder: "Agra",
    },
    {
      label: "Special Requirements",
      inputType: "textarea",
      placeHolder: "some random description",
    },
  ];
  return (
    <div>
      <Typography>Let us know who you are</Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "2%  0% 3%",
        }}
      >
        {inputSet.map((item: any) => (
          <div
            style={{
              width: item.inputType === "textarea" ? "100%" : "48%",
              marginBottom: "2%",
            }}
          >
            <Typography gutterBottom>{item.label}</Typography>
            <HandleSelectDropDown inputdata={item} />
          </div>
        ))}
      </div>
      <div style={{width:"50%"}}>
        <Typography variant="h5" gutterBottom> Let us know </Typography>
        <Typography gutterBottom>
          We'll let the property or host know when to expect you.
        </Typography>
        <HandleSelectDropDown inputdata={null} />
      </div>
      <div style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight:"2%"
      }}>
        <Button color="primary" variant="contained" style={{minWidth:"13.75rem", paddingBottom:"1rem", paddingTop:"1rem", fontSize:"1.15rem"}}> Next Page</Button>
      </div>
    </div>
  );
};

function HandleSelectDropDown({ inputdata }: any) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleInputFields = (filed: any) => {
    if (filed?.inputType) {
      switch (filed.inputType) {
        case "input":
        case "emailInput":
        case "phoneInput":
          return (
            <>
              <TextField fullWidth id="outlined-basic" variant="outlined" placeholder={filed.placeHolder}/>
            </>
          );
        case "dropdown":
          return (
            <>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                style={{ width: "-webkit-fill-available" }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </>
          );
        case "textarea":
          return <TextareaAutosize style={{ width: "100%" }} minRows={10} />;
        case "default":
          return (
            <>
              <TextField fullWidth label={filed.placeHolder} id="fullWidth" />
            </>
          );
      }
    } else {
      return (
        <>
          <TextField
            fullWidth
            label={filed?.placeHolder || ""}
            id="fullWidth"
          />
        </>
      );
    }
  };
  return <>{handleInputFields(inputdata)}</>;
}

export default CustomerInformation;
