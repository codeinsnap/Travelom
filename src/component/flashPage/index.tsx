import React from "react";
import { CircularProgress } from "@mui/material";

export const flashPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
};
