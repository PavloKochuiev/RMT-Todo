import React from "react";

import { Box } from "@mui/material";
import listerLogo from "../assets/listerLogo.png";
import { useNavigate } from "react-router";

export const Logo = () => {
  const navigate = useNavigate();

  const handleNavigateToWelcomePage = () => {
    navigate("/");
  };

  return (
    <Box
      onClick={handleNavigateToWelcomePage}
      sx={{ cursor: "pointer", ":hover": { opacity: "0.85" } }}
    >
      <img height={85} width={160} src={listerLogo} alt="logo" />
    </Box>
  );
};
