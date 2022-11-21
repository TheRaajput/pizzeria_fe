import * as yup from "yup";
import { EMAIL_REGEX, PASSWORD_PATTERN } from "../../config/regex";

export const registerInitialState = {
  name: "",
  contact_number: "",
  email: "",
  password: "",
};

export const registerValidationSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  contact_number: yup
    .string()
    .required("This field is required")
    .min(10, "Must be 10 digit long")
    .max(10, "Must be 10 digit long"),
  email: yup
    .string()
    .required("This field is required")
    .matches(EMAIL_REGEX, "Enter valid email"),
  password: yup
    .string()
    .required("This field is required")
    .matches(PASSWORD_PATTERN, "Enter valid password"),
});
