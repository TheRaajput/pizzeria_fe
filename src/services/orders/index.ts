import { API_URLS } from "../../config/API_URLS";
import { store } from "../../redux";
import axios from "../../utils/axios";
export const getOrder = async () => {
  try {
    const { auth, user } = store.getState();
    const response = await axios.get(API_URLS.order + "/" + user._id, {
      headers: { authorization: `Bearer ${auth.token}` },
    });
    return response;
  } catch (err) {
    throw new Error();
  }
};
