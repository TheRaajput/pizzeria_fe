import * as yup from "yup";
import { EMAIL_REGEX, PASSWORD_PATTERN } from "../../config/regex";

export const loginInitialState = { email: "", password: "" };

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .matches(EMAIL_REGEX, "Enter valid email"),
  password: yup
    .string()
    .required("This field is required")
    .matches(PASSWORD_PATTERN, "Enter valid password"),
});

export const forgetPassSchema = yup.object().shape({
  password: yup
    .string()
    .required("This field is required")
    .matches(PASSWORD_PATTERN, "Enter valid password"),
  cnfPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
