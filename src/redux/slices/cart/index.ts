import { createSlice } from "@reduxjs/toolkit";

export const Cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state: any, actions) => {
      const itemInCart = state.find(
        (item: any) => item.product_id === actions.payload.product_id
      );
      if (!itemInCart) {
        state.push({ ...actions.payload, quantity: 1 });
      }
    },
    increment: (state: any, actions) => {
      const item = state.find(
        (item: any) => item.product_id === actions.payload.product_id
      );
      item.quantity++;
    },
    decrement: (state: any, actions) => {
      const item = state.find(
        (item: any) => item.product_id === actions.payload.product_id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state: any, actions) => {
      const removeItem = state.filter(
        (item: any) => item.product_id !== actions.payload
      );
      state = removeItem;
      return state;
    },
    resetCart: (state) => {
      state = [];
      return state;
    },
  },
});

export const { addToCart, increment, decrement, removeItem, resetCart } =
  Cart.actions;
