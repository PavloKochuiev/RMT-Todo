import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CustomButton from "./CustomButton";
import signupBackground from "../../assets/signupBackground.png";
import loginBackground from "../../assets/loginBackground.png";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useValidationAuthSchema } from "./validationAuthSchema";
import axios from "axios";

interface Props extends RouteComponentProps {}

type State = {
  showPassword: boolean;
};

class AuthForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showPassword: false,
    };

    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleNavigateToSignup = this.handleNavigateToSignup.bind(this);
    this.handleNavigateToLogin = this.handleNavigateToLogin.bind(this);
  }

  handleClickShowPassword = () => {
    this.setState((state) => ({ showPassword: !state.showPassword }));
  };

  handleNavigateToSignup = () => {
    this.props.history.push("/auth/signup");
  };

  handleNavigateToLogin = () => {
    this.props.history.push("/auth/login");
  };

  handleSignupSubmit = async (email: string, password: string) => {
    try {
      await axios
        .post(
          "/api/auth/signup",
          {
            email: email,
            password: password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const location = window.location.pathname;
    const login = "/auth/login";

    return (
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "400px" }}>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#232115",
              marginBottom: "40px",
            }}
          >
            {location === login ? "Log in" : "Sign up"}
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) =>
              this.handleSignupSubmit(values.email, values.password)
            }
            validationSchema={useValidationAuthSchema}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Field
                    as={Input}
                    name="email"
                    type="email"
                    placeholder="Enter your email..."
                    variant="standard"
                  />
                  {errors.email && touched.email ? (
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginTop: "5px",
                        color: "red",
                        position: "absolute",
                        top: "327px",
                      }}
                    >
                      {errors.email}
                    </Typography>
                  ) : null}
                  <Box sx={{ marginBottom: "40px" }} />
                  <Field
                    as={Input}
                    name="password"
                    type={this.state.showPassword ? "text" : "password"}
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
                  {errors.password && touched.password ? (
                    <Typography
                      sx={{
                        fontSize: "12px",
                        marginTop: "5px",
                        color: "red",
                        position: "absolute",
                        top: "398px",
                      }}
                    >
                      {errors.password}
                    </Typography>
                  ) : null}
                  <Box sx={{ marginBottom: "40px" }} />
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <CustomButton
                    text={location === login ? "Log in" : "Sign up with Email"}
                  />
                </Box>
              </Form>
            )}
          </Formik>
          <Typography
            sx={{
              fontSize: "13px",
              paddingBottom: "10px",
              lineHeight: "15px",
              borderBottom: "1px solid lightgrey",
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
                display: "inline-block",
              }}
            >
              {location === login
                ? "Don’t have an account?"
                : "Already signed up?"}
            </Typography>{" "}
            <Typography
              onClick={
                location === login
                  ? this.handleNavigateToSignup
                  : this.handleNavigateToLogin
              }
              sx={{
                fontSize: "13px",
                marginTop: "10px",
                textDecorationLine: "underline",
                cursor: "pointer",
                display: "inline-block",
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

export default withRouter(AuthForm);
