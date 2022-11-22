import { useState } from "react";
import { useMutation } from "react-query";
import { useNotifications } from "reapop";
import { getOtp } from "../../../../services/login";
import InputField from "../../../shared/inputField";

interface Props {
  data: any;
  screen: string;
  setScreen: (val: string) => void;
  setData: (val: { email: string; password: string }) => void;
}

const GetOtp = ({ setScreen, data, setData }: Props) => {
  const [email, setemail] = useState("");
  const { notify } = useNotifications();
  const { mutate } = useMutation(getOtp, {
    onSuccess: (res: any) => {
      if (res.status === 200) {
        notify(res.data, { status: "success" });
        setData({ ...data, email: email });
        setScreen("verifyOtp");
      } else if (res.response.status === 400) {
        notify(res.response.data, { status: "error" });
      }
    },
  });
  return (
    <form className="space-y-5">
      <InputField
        id="email"
        placeholder="Enter your email"
        name="email"
        label="Email"
        error={false}
        onChange={(ev) => setemail(ev.target.value)}
      />
      <button
        type="button"
        onClick={() => mutate(email)}
        className="flex justify-center w-full p-3 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in bg-green-400 rounded-full shadow-lg cursor-pointer hover:bg-green-500"
      >
        Get OTP
      </button>
    </form>
  );
};

export default GetOtp;
