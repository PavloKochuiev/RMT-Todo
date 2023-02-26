import { Box } from "@mui/material";
import React, { useContext } from "react";
import { HomeIcon } from "../../assets/HomeIcon";
import { useNavigate } from "react-router";
import { LogoutButton } from "./LogoutButton";
import { useAuth } from "../../hooks/auth.hook";
import { AuthContext } from "../../context/AuthContext";

export const NavBar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigateToTodo = () => {
    navigate("/todo");
  };

  return (
    <Box
      sx={{
        background: "#FFD600",
        height: "60px",
        paddingLeft: "80px",
        paddingRight: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          ":hover": { opacity: "0.8" },
        }}
        onClick={handleNavigateToTodo}
      >
        <HomeIcon color="white" />
      </Box>
      <Box onClick={logout} sx={{ ":hover": { opacity: "0.8" } }}>
        <LogoutButton />
      </Box>
    </Box>
  );
};
