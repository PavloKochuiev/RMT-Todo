import * as Yup from "yup";

const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const useValidationAuthSchema = () =>
  Yup.object({
    email: Yup.string().required("email is required"),
    password: Yup.string()
      .min(6, "must be longer then 6 characters")
      .matches(PASSWORD_REGEX, "must use numbers and special characters")
      .required("password is required"),
  });
