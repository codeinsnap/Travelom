import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import mytravelicon from "../../assets/fonts/travelicon.svg";
import { Typography } from "@mui/material";
import "./navigation.css";
import { NavigationBarbuttonsList } from "../../constants/staticData";

const NavigationButton = (props: any) => {
  const { data, navigate } = props;
  return (
    <Button
      variant="text"
      style={{ color: "black", marginRight: "10%" }}
      onClick={() => navigate(data.link)}
      key={data.id}
    >
      {data.title}
    </Button>
  );
};

const NavigatinToolBar = (props: any) => {
  const { navigate } = props;
  return (
    <Toolbar
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingBottom: "1%",
        flexWrap: "wrap",
      }}
    >
      <Typography
        fontSize={35}
        style={{
          display: "flex",
          alignItems: "center",
          color: "black",
          width: "15%",
        }}
      >
        <img
          src={mytravelicon}
          style={{ width: "100%", marginRight: "2%" }}
          alt=""
        />
        MyTravel
      </Typography>
      <div style={{ display: "flex", marginLeft: "50%" }}>
        {NavigationBarbuttonsList.map((item: any) => (
          <NavigationButton data={item} navigate={navigate} key={item.id}/>
        ))}
      </div>
    </Toolbar>
  );
};
export default NavigatinToolBar;
