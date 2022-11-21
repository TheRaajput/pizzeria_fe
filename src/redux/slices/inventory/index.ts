import { createSlice } from "@reduxjs/toolkit";
import { Inventory } from "../../../types/inventory";

export const InventoryStore = createSlice({
  name: "inventory",
  initialState: [] as Inventory[],
  reducers: {
    addtoInventory: (state: any, actions) => {
      state = actions.payload;
      return state;
    },
    incrementItems: (state: any, actions) => {
      const item = state["items"][actions.payload.categories].find(
        (item: any) => item._id === actions.payload.id
      );
      if (item) item.quantity++;
    },
    decrementItems: (state: any, actions) => {
      const item = state["items"][actions.payload.categories].find(
        (item: any) => item._id === actions.payload.id
      );
      if (item) item.quantity--;
    },
    incrementProducts: (state: any, actions) => {
      const item = state["products"].find(
        (item: any) => item._id === actions.payload.id
      );
      if (item) item.quantity++;
    },
    decrementProducts: (state: any, actions) => {
      const item = state["products"].find(
        (item: any) => item._id === actions.payload.id
      );
      if (item) item.quantity--;
    },
    resetInventory: (state: any) => {
      state = [];
      return state;
    },
  },
});

export const {
  addtoInventory,
  incrementItems,
  decrementItems,
  incrementProducts,
  decrementProducts,
  resetInventory,
} = InventoryStore.actions;
