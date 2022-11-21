import { API_URLS } from "../../config/API_URLS";
import axios from "../../utils/axios";
interface Props {
  name: string;
  email: string;
  password: string;
  contact_number: string;
}
export const registerUser = async ({
  name,
  email,
  password,
  contact_number,
}: Props) => {
  try {
    const data = {
      name: name,
      email: email,
      password: password,
      contact_number: contact_number,
    };
    const response = await axios.post(API_URLS.register, data);
    return response;
  } catch (err) {
    return err;
  }
};

export const sendOtp = async ({ id, otp }: { id: string; otp: string }) => {
  try {
    const response = axios.post(API_URLS.users + API_URLS.verify, {
      id: id,
      otp: otp,
    });
    return response;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
