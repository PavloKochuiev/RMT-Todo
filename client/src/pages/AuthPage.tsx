import React from "react";
import { Box } from "@mui/material";
import { Logo } from "../components/Logo";
import { AuthForm } from "../components/AuthForm/AuthForm";

export const AuthPage = () => {
  return (
    <Box
      sx={{
        width: "940px",
        marginLeft: "120px",
        marginRight: "120px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Box sx={{ marginBottom: "100px" }}>
        <Logo />
      </Box>
      <AuthForm />
    </Box>
  );
};
