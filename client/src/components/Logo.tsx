import React from "react";

import { Box } from "@mui/material";
import listerLogo from "../assets/listerLogo.png";
import { useHistory } from "react-router";

export const Logo = () => {
  const history = useHistory();

  const handleNavigateToWelcomePage = () => {
    history.push("/");
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
