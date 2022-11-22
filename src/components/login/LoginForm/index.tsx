import { useFormik } from "formik";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import {
  loginInitialState,
  loginValidationSchema,
} from "../../../helpers/login";
import { login } from "../../../services/login";
import InputField from "../../shared/inputField";
import { useNotifications } from "reapop";
import { useDispatch } from "react-redux";
import { accesToken } from "../../../redux/slices/Auth";
import { getUserData } from "../../../redux/slices/users";
import ForgotPassword from "../forgotPassword";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notify } = useNotifications();
  const { values, errors, handleChange, handleSubmit, isValid } = useFormik({
    initialValues: loginInitialState,
    validationSchema: loginValidationSchema,

    onSubmit: async ({ email, password }) => {
      const data = {
        email: email,
        password: password,
      };
      mutate(data);
    },
  });
  const { mutate } = useMutation(login, {
    onSuccess: (res: any) => {
      if (res?.data?.token) {
        dispatch(accesToken(res?.data?.token));
        dispatch(getUserData(res?.data?.data));
        navigate("/", { replace: true });
      } else {
        notify(res?.response?.data?.message, { status: "error" });
      }
    },
  });
  return (
    <div className="w-full p-12 mx-auto bg-white rounded-2xl">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-gray-800">Sign In </h3>
        <p className="text-gray-500">Please sign in to your account.</p>
      </div>
      <form
        className="flex flex-col justify-center space-y-5"
        onSubmit={handleSubmit}
      >
        <InputField
          id="email"
          name="email"
          label="Email"
          error={errors.email ? (values.email ? true : false) : false}
          errorText={errors.email ? (values.email ? errors.email : "") : ""}
          placeholder="mail@gmail.com"
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
          disabled={
            !isValid || values?.password === "" || values?.email === ""
              ? true
              : false
          }
          className="flex justify-center w-full p-3 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in bg-green-400 rounded-full shadow-lg cursor-pointer hover:bg-green-500"
        >
          Sign in
        </button>
        <Link
          to="/register"
          className="text-sm text-center text-green-400 hover:text-green-500"
        >
          Create Account
        </Link>
        <ForgotPassword />
      </form>
    </div>
  );
};

export default LoginForm;
