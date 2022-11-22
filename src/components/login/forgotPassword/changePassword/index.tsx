import { useFormik } from "formik";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "reapop";
import { forgetPassSchema } from "../../../../helpers/login";
import { changePassword } from "../../../../services/login";
import InputField from "../../../shared/inputField";

interface Props {
  data: any;
  screen: string;
  setScreen: (val: string) => void;
  setData: (val: { email: string; password: string }) => void;
}

const ChangePassword = ({ data }: Props) => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const { mutate } = useMutation(changePassword);
  const { handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: { password: "", cnfPassword: "" },
    validationSchema: forgetPassSchema,
    onSubmit: (fieldData) => {
      mutate(
        { email: data.email, password: fieldData.cnfPassword },
        {
          onSuccess: (res: any) => {
            if (res.status === 200) {
              notify(res.data, { status: "success" });
              navigate("/", { replace: true });
            } else {
              notify("Updation Failed", { status: "error" });
            }
          },
        }
      );
    },
  });
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <InputField
        id="password"
        placeholder="Enter new password"
        name="password"
        label="Enter new password"
        error={errors.password ? (values.password ? true : false) : false}
        errorText={
          errors.password ? (values.password ? errors.password : "") : ""
        }
        onChange={handleChange}
        type="password"
      />
      <InputField
        id="cnfPassword"
        placeholder="Confirm your password"
        name="cnfPassword"
        label="Confirm your password"
        error={errors.cnfPassword ? (values.cnfPassword ? true : false) : false}
        errorText={
          errors.cnfPassword
            ? values.cnfPassword
              ? errors.cnfPassword
              : ""
            : ""
        }
        onChange={handleChange}
        type="password"
      />
      <button
        type="submit"
        className="flex justify-center w-full p-3 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in bg-green-400 rounded-full shadow-lg cursor-pointer hover:bg-green-500"
      >
        Change Password
      </button>
    </form>
  );
};

export default ChangePassword;
