import { combineReducers } from "@reduxjs/toolkit";
import { Auth } from "./Auth";
import { Cart } from "./cart";
import { InventoryStore } from "./inventory";
import { User } from "./users";

const rootReducer = combineReducers({
  auth: Auth.reducer,
  cart: Cart.reducer,
  user: User.reducer,
  inventory: InventoryStore.reducer,
});

export default rootReducer;
