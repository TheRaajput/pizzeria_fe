import { API_URLS } from "../../config/API_URLS";
import { INVENTORY_ID } from "../../config/constants";
import { store } from "../../redux";
import { Items } from "../../types/inventory";
import axios from "../../utils/axios";
import { processCustomOrder } from "../../utils/Utility";

export const placeOrder = async () => {
  try {
    const { user, cart, auth } = store.getState();
    const userInfo = {
      user_id: user._id,
      email: user.email,
      contact_number: user.contact_number,
      name: user.name,
    };
    const data = {
      ...userInfo,
      inventory_id: INVENTORY_ID,
      line_items: [...cart],
      is_custom: false,
    };
    const response = await axios.post(API_URLS.order, data, {
      headers: { authorization: `Bearer ${auth.token}` },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const placeCustomOrder = async (data: Items) => {
  try {
    const { user, auth } = store.getState();
    const topping = processCustomOrder(data);
    const userInfo = {
      user_id: user._id,
      email: user.email,
      contact_number: user.contact_number,
      name: user.name,
    };
    const order_data = {
      ...userInfo,
      inventory_id: INVENTORY_ID,
      is_custom: true,
      toppings: topping.processedData,
      price: topping.cost,
    };
    const response = await axios.post(API_URLS.order, order_data, {
      headers: { authorization: `Bearer ${auth.token}` },
    });
    return response;
  } catch (err) {
    return err;
  }
};
