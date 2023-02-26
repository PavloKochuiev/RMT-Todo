import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Box } from "@mui/material";
import { Tabs } from "../components/Tabs/Tabs";

export const TodoPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box>
        <NavBar />
      </Box>
      <Tabs />
    </Box>
  );
};
