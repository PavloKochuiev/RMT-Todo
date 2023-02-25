import { Button } from "@mui/material";
import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {
  fontSize: string;
  width: string;
}

class StartButton extends Component<Props> {
  render() {
    const { fontSize, width } = this.props;

    const handleNavigateToSignup = () => {
      this.props.history.push("/auth/signup");
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
          ":hover": { backgroundColor: "#EDC700" },
        }}
      >
        Start for free
      </Button>
    );
  }
}

export default withRouter(StartButton);
