import React from "react";
import { Header } from "../components/Header/Header";
import { TitleBlock } from "../components/TitleBlock/TitleBlock";
import { Box } from "@mui/material";

export const WelcomePage = () => {
  return (
    <Box
      sx={{
        marginLeft: "120px",
        marginRight: "120px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Header />
      <TitleBlock />
    </Box>
  );
};
