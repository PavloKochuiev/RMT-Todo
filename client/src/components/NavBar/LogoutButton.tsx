import React from "react";
import { Button } from "@mui/material";

export const LogoutButton = () => {
  return (
    <Button
      sx={{
        fontSize: "18px",
        width: "100%",
        textTransform: "none",
        color: "white",
        borderRadius: "10px",
        paddingX: "15px",
        backgroundColor: "#FFD600",
        height: "35px",
      }}
    >
      Log out
    </Button>
  );
};
