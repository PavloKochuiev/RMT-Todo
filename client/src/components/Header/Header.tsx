import React from "react";
import { Box, Button } from "@mui/material";
import listerLogo from "../../assets/listerLogo.png";
import { StartButton } from "../StartButton/StartButton";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate("/auth/login");
  };

  const handleNavigateToWelcomePage = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <Box
        onClick={handleNavigateToWelcomePage}
        sx={{ cursor: "pointer", ":hover": { opacity: "0.85" } }}
      >
        <img
          height={85}
          width={160}
          src={listerLogo}
          alt="logo"
          onClick={handleNavigateToWelcomePage}
        />
      </Box>
      <Box>
        <Button
          onClick={handleNavigateToLogin}
          sx={{
            textTransform: "none",
            color: "#232115",
            fontSize: "16px",
            borderRadius: "10px",
            paddingX: "15px",
            marginRight: "20px",
            ":hover": { backgroundColor: "hsla(53,10%,69%,.15)" }
          }}
        >
          Log in
        </Button>
        <StartButton width="140px" fontSize="16px" />
      </Box>
    </Box>
  );
};
