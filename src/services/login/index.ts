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
