import { API_URLS } from "../../config/API_URLS";
import { store } from "../../redux";
import axios from "../../utils/axios";
export const getUsers = async (token: string) => {
  try {
    const response = await axios.get(API_URLS.users, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const getInventory = async (token: string) => {
  try {
    const response = await axios.get(API_URLS.inventory, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response;
  } catch (err) {
    throw new Error();
  }
};

export const updateInventory = async (body: any) => {
  try {
    const { auth } = store.getState();
    const response = await axios.post(API_URLS.inventory, body, {
      headers: { authorization: `Bearer ${auth.token}` },
    });
    return response;
  } catch (err) {
    throw new Error();
  }
};

export const getAllOrders = async (token: string) => {
  try {
    const response = await axios.get(API_URLS.order, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const updateOrderStatus = async ({
  id,
  status,
}: {
  id: string;
  status: string;
}) => {
  try {
    const { auth } = store.getState();
    const response = await axios.post(
      API_URLS.order + "/" + "update",
      {
        id: id,
        status: status,
      },
      { headers: { authorization: `Bearer ${auth.token}` } }
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = axios.delete(API_URLS.users + "/" + id);
    return response;
  } catch (err) {
    return err;
  }
};
