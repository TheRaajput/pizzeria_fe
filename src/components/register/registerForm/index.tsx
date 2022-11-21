import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../shared/inputField";
import { useFormik } from "formik";
import {
  registerInitialState,
  registerValidationSchema,
} from "../../../helpers/register";
import { useMutation } from "react-query";
import { registerUser } from "../../../services/register";
import { useNotifications } from "reapop";
import OTPModal from "../OtpModal";

const RegisterForm = () => {
  const { notify } = useNotifications();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: registerInitialState,
    validationSchema: registerValidationSchema,
    onSubmit: async ({ email, password, name, contact_number }) => {
      const data = {
        email: email,
        password: password,
        name: name,
        contact_number: contact_number,
      };
      mutate(data);
    },
  });
  const { mutate } = useMutation(registerUser, {
    onSuccess: (res: any) => {
      notify(res?.data?.message, { status: "success" });
      setId(res?.data?.id);
      setIsOpen(true);
    },
  });
  return (
    <>
      <OTPModal isOpen={isOpen} setIsOpen={setIsOpen} id={id} />
      <div className="w-full p-12 mx-auto bg-white rounded-2xl">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Register</h3>
          <p className="text-gray-500">Please create your account.</p>
        </div>
        <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
          <InputField
            id="name"
            label="Name"
            placeholder="Name"
            error={errors.name ? (values.name ? true : false) : false}
            errorText={errors.name ? (values.name ? errors.name : "") : ""}
            onChange={handleChange}
          />
          <InputField
            id="contact_number"
            label="Contact Number"
            placeholder="+91-XXXXXXXX"
            error={
              errors.contact_number
                ? values.contact_number
                  ? true
                  : false
                : false
            }
            errorText={
              errors.contact_number
                ? values.contact_number
                  ? errors.contact_number
                  : ""
                : ""
            }
            onChange={handleChange}
          />
          <InputField
            id="email"
            label="Email"
            placeholder="mail@gmail.com"
            error={errors.email ? (values.email ? true : false) : false}
            errorText={errors.email ? (values.email ? errors.email : "") : ""}
            onChange={handleChange}
          />
          <InputField
            id="password"
            name="password"
            label="Password"
            error={errors.password ? (values.password ? true : false) : false}
            errorText={
              errors.password ? (values.password ? errors.password : "") : ""
            }
            placeholder="Enter your password"
            onChange={handleChange}
            type="password"
          />
          <button
            type="submit"
            className="flex justify-center w-full p-3 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in bg-green-400 rounded-full shadow-lg cursor-pointer hover:bg-green-500"
          >
            Sign Up
          </button>
          <Link
            to="/login"
            className="text-sm text-center text-green-400 hover:text-green-500"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
