import { useState } from "react";
import CustomModal from "../../shared/customModal";
import ChangePassword from "./changePassword";
import GetOtp from "./getOtp";
import VerifyOtp from "./verifyOtp";

const ForgotPassword = () => {
  const [screen, setScreen] = useState<string>("getOtp");
  const [data, setData] = useState({ email: "", password: "" });
  const forgotPass = {
    getOtp: GetOtp,
    verifyOtp: VerifyOtp,
    changePassword: ChangePassword,
  };
  const Component = forgotPass[screen as keyof typeof forgotPass];
  return (
    <CustomModal
      title="Forgot Password"
      buttonText="forgot password"
      classToOverride="!bg-transparent !text-green-400 hover:!text-green-500 !font-normal"
    >
      <Component
        setScreen={setScreen}
        screen={screen}
        setData={setData}
        data={data}
      />
    </CustomModal>
  );
};

export default ForgotPassword;
