import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  fontSize: string;
  width: string;
};
export const StartButton: React.FC<Props> = ({ fontSize, width }) => {
  const navigate = useNavigate();

  const handleNavigateToSignup = () => {
    navigate("/auth/signup");
  };

  return (
    <Button
      onClick={handleNavigateToSignup}
      sx={{
        fontSize,
        width,
        textTransform: "none",
        color: "#232115",
        borderRadius: "10px",
        paddingX: "15px",
        backgroundColor: "#FFD600",
        ":hover": { backgroundColor: "#EDC700" }
      }}
    >
      Start for free
    </Button>
  );
};
