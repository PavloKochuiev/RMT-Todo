// @ts-nocheck
import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  Typography
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CustomButton } from "./CustomButton";
import signupBackground from "../../assets/signupBackground.png";
import loginBackground from "../../assets/loginBackground.png";
import { useNavigate } from "react-router-dom";
import { useValidationAuthSchema } from "./validationAuthSchema";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

type LoginResponse = {
  jwtToken: string;
  userId: string;
};

export const AuthForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMessageSignup, setErrorMessageSignup] = React.useState("");
  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = window.location.pathname;
  const loginLocation = "/auth/login";

  const handleClickShowPassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };

  const handleNavigateToSignup = () => {
    navigate("/auth/signup");
  };

  const handleNavigateToLogin = () => {
    navigate("/auth/login");
  };

  const handleSignupSubmit = async (email: string, password: string) => {
    await axios
      .post<LoginResponse>(
        "/api/auth/signup",
        { email: email, password: password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(response => console.log(response.data))
      .catch(error => setErrorMessageSignup(error.response.data.message));
  };

  const handleLoginSubmit = async (email: string, password: string) => {
    await axios
      .post<LoginResponse>(
        "/api/auth/login",
        { email: email, password: password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(response => login(response.data.jwtToken, response.data.userId))
      .catch(error => setErrorMessageSignup(error.response.data.message));
  };

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
          {location === loginLocation ? "Log in" : "Sign up"}
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values =>
            location === loginLocation
              ? handleLoginSubmit(values.email, values.password)
              : handleSignupSubmit(values.email, values.password)
          }
          validationSchema={useValidationAuthSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%"
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
                      top: "327px"
                    }}
                  >
                    {errors.email}
                  </Typography>
                ) : null}
                <Box sx={{ marginBottom: "40px" }} />
                <Field
                  as={Input}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
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
                      top: "398px"
                    }}
                  >
                    {errors.password}
                  </Typography>
                ) : null}
                {errorMessageSignup ? (
                  <Typography
                    sx={{
                      fontSize: "12px",
                      marginTop: "5px",
                      color: "red",
                      position: "absolute",
                      top: "327px",
                      left: "421px"
                    }}
                  >
                    {errorMessageSignup}
                  </Typography>
                ) : null}
                <Box sx={{ marginBottom: "40px" }} />
              </Box>
              <Box sx={{ marginBottom: "20px" }}>
                <CustomButton
                  text={
                    location === loginLocation ? "Log in" : "Sign up with Email"
                  }
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
            {location === loginLocation
              ? "Don’t have an account?"
              : "Already signed up?"}
          </Typography>{" "}
          <Typography
            onClick={
              location === loginLocation
                ? handleNavigateToSignup
                : handleNavigateToLogin
            }
            sx={{
              fontSize: "13px",
              marginTop: "10px",
              textDecorationLine: "underline",
              cursor: "pointer",
              display: "inline-block"
            }}
          >
            {location === loginLocation ? "Sign up" : "Go to login"}
          </Typography>
        </Box>
      </Box>
      <Box>
        <img
          height={400}
          width={400}
          src={location === loginLocation ? loginBackground : signupBackground}
          alt="background"
        />
      </Box>
    </Box>
  );
};
