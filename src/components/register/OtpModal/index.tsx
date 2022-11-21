import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import OtpInput from "react-otp-input";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "reapop";
import { sendOtp } from "../../../services/register";
interface Props {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  id: string;
}
const OTPModal = ({ isOpen, setIsOpen, id }: Props) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const { mutate } = useMutation(sendOtp, {
    onSuccess: (res) => {
      if (res.status === 200) {
        navigate("/login");
        notify("You are verified. Please login to continue", {
          status: "success",
        });
      }
    },
  });
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={() => {}} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4">
            <Dialog.Panel className="w-3/4 p-10 mx-auto space-y-10 bg-white rounded-lg lg:w-1/3">
              <Dialog.Title className="text-3xl text-center">
                VERIFY OTP
              </Dialog.Title>
              <Dialog.Description className="flex flex-col items-center space-y-10">
                <OtpInput
                  value={otp}
                  onChange={(otp: string) => setOtp(otp)}
                  numInputs={6}
                  containerStyle="w-full flex justify-center"
                  inputStyle="border border-black mx-3 rounded-md outline-none !w-7"
                  shouldAutoFocus={true}
                />
                <button
                  className="flex justify-center w-1/2 p-3 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in bg-green-400 rounded-full shadow-lg cursor-pointer hover:bg-green-500"
                  onClick={() => mutate({ id, otp })}
                >
                  Verify
                </button>
              </Dialog.Description>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default OTPModal;
