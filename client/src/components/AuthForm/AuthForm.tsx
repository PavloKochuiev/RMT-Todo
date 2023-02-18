import React, { Component } from "react";
import { withFormik } from "formik";
import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CustomButton from "./CustomButton";
import signupBackground from "../../assets/signupBackground.png";
import loginBackground from "../../assets/loginBackground.png";

type Props = {};

type State = {
  showPassword: boolean;
};

export default class AuthForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showPassword: false
    };

    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const location = window.location.pathname;
    const login = "/auth/login";
    const signup = "/auth/signup";

    return (
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "400px" }}>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#232115",
              marginBottom: "40px"
            }}
          >
            {location === login ? "Log in" : "Sign up"}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <TextField
              sx={{ marginBottom: "50px" }}
              placeholder="Enter your email..."
              variant="standard"
            />
            <Input
              type={this.state.showPassword ? "text" : "password"}
              sx={{ marginBottom: "40px" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Enter your password..."
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <CustomButton
              text={location === login ? "Log in" : "Sign up with Email"}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "13px",
              paddingBottom: "10px",
              lineHeight: "15px",
              borderBottom: "1px solid lightgrey"
            }}
          >
            By continuing with Email, you agree to RMT’s Terms of Service and
            Privacy Policy.
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "13px",
                marginTop: "10px",
                display: "inline-block"
              }}
            >
              {location === login
                ? "Don’t have an account?"
                : "Already signed up?"}
            </Typography>{" "}
            <Typography
              sx={{
                fontSize: "13px",
                marginTop: "10px",
                textDecorationLine: "underline",
                cursor: "pointer",
                display: "inline-block"
              }}
            >
              {location === login ? "Sign up" : "Go to login"}
            </Typography>
          </Box>
        </Box>
        <Box>
          <img
            height={400}
            width={400}
            src={location === login ? loginBackground : signupBackground}
            alt="background"
          />
        </Box>
      </Box>
    );
  }
}
