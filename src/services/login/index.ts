import { API_URLS } from "../../config/API_URLS";
import axios from "../../utils/axios";

interface Props {
  email: string;
  password: string;
}

export const login = async ({ email, password }: Props) => {
  try {
    const data = {
      email: email,
      password: password,
    };
    const response = await axios.post(API_URLS.login, data);
    return response;
  } catch (err) {
    return err;
  }
};

export const getOtp = async (email: string) => {
  try {
    const data = {
      email: email,
    };
    const response = await axios.post(
      API_URLS.users + API_URLS.forgot_password,
      data
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const forgotPassVerify = async (OtpData: {
  email: string;
  otp: string;
}) => {
  try {
    const data = {
      email: OtpData.email,
      Otp: OtpData.otp,
    };
    const response = await axios.post(
      API_URLS.users + API_URLS.otp_verification,
      data
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const changePassword = async (changeData: {
  email: string;
  password: string;
}) => {
  try {
    const data = {
      email: changeData.email,
      password: changeData.password,
    };
    const response = await axios.post(
      API_URLS.users + API_URLS.change_password,
      data
    );
    return response;
  } catch (err) {
    return err;
  }
};
