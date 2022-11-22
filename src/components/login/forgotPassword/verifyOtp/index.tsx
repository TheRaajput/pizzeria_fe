import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useMutation } from "react-query";
import { useNotifications } from "reapop";
import { forgotPassVerify } from "../../../../services/login";

interface Props {
  data: { email: string; password: string };
  screen: string;
  setScreen: (val: string) => void;
  setData: (val: { email: string; password: string }) => void;
}

const VerifyOtp = ({ data, setScreen }: Props) => {
  const [otp, setOtp] = useState("");
  const { notify } = useNotifications();
  const { mutate } = useMutation(forgotPassVerify, {
    onSuccess: (res: any) => {
      if (res.status === 200) {
        notify(res.data, { status: "success" });
        setScreen("changePassword");
      } else if (res.response.status === 400) {
        notify(res.response.data, { status: "error" });
      }
    },
  });
  return (
    <form className="flex flex-col items-center space-y-10">
      <OtpInput
        value={otp}
        onChange={(otp: string) => setOtp(otp)}
        numInputs={6}
        containerStyle="w-full flex justify-center"
        inputStyle="border border-black mx-3 rounded-md outline-none !w-7"
        shouldAutoFocus={true}
      />
      <button
        onClick={() => mutate({ email: data.email, otp: otp })}
        className="flex justify-center w-1/2 p-3 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in bg-green-400 rounded-full shadow-lg cursor-pointer hover:bg-green-500"
      >
        Verify
      </button>
    </form>
  );
};

export default VerifyOtp;
