import selectroomimg from "../assets/img/200x154/img1.jpg";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BedIcon from "@mui/icons-material/Bed";
import WifiIcon from "@mui/icons-material/Wifi";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

export const NavigationBarbuttonsList = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Hotel", link: "/hotel-details" },
  { id: 3, title: "About", link: "/about" },
  { id: 4, title: "Contact", link: "/contact" },
];

export const SelectHotelRoomCard = [
  {
    name: "Deluxe Twin Room",
    hotelImage: selectroomimg,
    amenities: [
      { title: "Free Wifi", icon: <WifiIcon /> },
      { title: "2 Single Beds", icon: <BedIcon /> },
      { title: "15m2", icon: <AspectRatioIcon /> },
      { title: "Shower and Bathtub", icon: <BathtubIcon /> },
    ],
    hotelPrice: '$480.00',
  },
  {
    name: "Deluxe Twin Room",
    hotelImage: selectroomimg,
    amenities: [
      { title: "Free Wifi", icon: <WifiIcon /> },
      { title: "2 Single Beds", icon: <BedIcon /> },
      { title: "15m2", icon: <AspectRatioIcon /> },
      { title: "Shower and Bathtub", icon: <BathtubIcon /> },
    ],
    hotelPrice: '$480.00',
  }
];
