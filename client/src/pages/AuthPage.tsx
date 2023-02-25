import React from "react";
import { Box } from "@mui/material";
import { Logo } from "../components/Logo";
import { AuthForm } from "../components/AuthForm/AuthForm";

export const AuthPage = () => {
  return (
    <Box sx={{ width: "940px", marginX: "auto" }}>
      <Box sx={{ marginBottom: "100px" }}>
        <Logo />
      </Box>
      <AuthForm />
    </Box>
  );
};
