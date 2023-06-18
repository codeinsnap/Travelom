import { Divider } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const BookingConfirmation = ({ setCurrentStatus }: any) => {
  const bookingInformation = {
    info: [
      {
        id: 1,
        title: "Booking number",
        value: "5784-BD245",
      },
      {
        id: 2,
        title: "First name",
        value: "Jessica",
      },
      {
        id: 3,
        title: "Last name",
        value: "Brown",
      },
      {
        id: 4,
        title: "E-mail address",
        value: "Info@Jessica.com",
      },
      {
        id: 5,
        title: "Street Address and number",
        value: "353 Third floor Avenue",
      },
      {
        id: 6,
        title: "Town / City",
        value: "Paris,France",
      },
      {
        id: 7,
        title: "ZIP code",
        value: "75800-875",
      },
      {
        id: 8,
        title: "Country",
        value: "United States of america",
      },
    ],
    tempParagraph: [
      {
        id: 1,
        title: "Payment",
        paragraph:
          "Praesent dolor lectus, rutrum sit amet risus vitae, imperdiet cursus neque. Nulla tempor nec lorem eu suscipit. Donec dignissim lectus a nunc molestie consectetur. Nulla eu urna in nisi adipiscing placerat. Nam vel scelerisque magna. Donec justo urna, posuere ut dictum quis.",
        link: "Payment is made by Credit Card Via Paypal.",
      },
      {
        id: 2,
        title: "View Booking Details",
        paragraph:
          "Praesent dolor lectus, rutrum sit amet risus vitae, imperdiet cursus neque. Nulla tempor nec lorem eu suscipit. Donec dignissim lectus a nunc molestie consectetur. Nulla eu urna in nisi adipiscing placerat. Nam vel scelerisque magna. Donec justo urna, posuere ut dictum quis.",
        link: "https://www.mytravel.com/booking-details/?=f4acb19f-9542-4a5c-b8ee",
      },
    ],
  };
  return (
    <div>
      <Typography
        style={{
          fontWeight: 500,
          fontSize: "1.313rem",
          color: "#3b444f",
          marginBottom: " 0.5rem",
          lineHeight: 1.5,
          padding: "0rem 2rem 0rem",
        }}
      >
        Traveler Information
      </Typography>
      <TableContainer component={Paper} style={{ boxShadow: "none" }}>
        <Table aria-label="simple table">
          <TableBody>
            {bookingInformation?.info?.map((row: any) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    border: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "#3b444f",
                    lineHeight: 1.5,
                    padding: "0.5rem 2rem 0.5rem",
                  }}
                >
                  {row.title}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    border: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "#77838f",
                    lineHeight: 1.5,
                    padding: "0.5rem 2rem 0.5rem",
                  }}
                >
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {bookingInformation.tempParagraph.map((row: any) => (
        <>
          <Divider />
          <div
            key={row.id}
            style={{
              paddingLeft: "2rem",
              paddingRight: "2rem",
              paddingBottom: "2rem",
              paddingTop: "1.5rem",
            }}
          >
            <Typography
              style={{
                fontSize: "1.313rem",
                fontWeight: "500",
                color: "#3b444f",
                marginBottom: "1rem ",
              }}
            >
              {row.title}
            </Typography>
            <Typography
              style={{
                color: "#77838f",
                lineHeight: "1.7",
                fontWeight: 400,
                marginBottom: "1rem",
                fontSize: "1rem",
              }}
            >
              {row.paragraph}
            </Typography>
            <Link
              to=""
              style={{
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
                textAlign: "left",
                color: "#297cbb",
                backgroundColor: "transparent",
              }}
            >
              {row.link}
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default BookingConfirmation;
