import { Button } from "@mui/material";
import React, { Component } from "react";

type Props = {
  text: string;
};

export default class CustomButton extends Component<Props> {
  render() {
    const { text } = this.props;

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
          ":hover": { backgroundColor: "#EDC700" },
        }}
      >
        {text}
      </Button>
    );
  }
}
