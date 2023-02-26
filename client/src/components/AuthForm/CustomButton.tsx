// @ts-nocheck
import { Button } from "@mui/material";
import React from "react";

type Props = {
  text: string;
};

export const CustomButton: React.FC<Props> = ({ text }) => {
  return (
    <Button
      type="submit"
      sx={{
        fontSize: "18px",
        width: "100%",
        textTransform: "none",
        color: "#232115",
        borderRadius: "10px",
        paddingX: "15px",
        backgroundColor: "#FFD600",
        ":hover": { backgroundColor: "#EDC700" }
      }}
    >
      {text}
    </Button>
  );
};
