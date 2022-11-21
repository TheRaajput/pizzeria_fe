import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../types/user";

export const User = createSlice({
  name: "user",
  initialState: {} as IUser,
  reducers: {
    getUserData: (state: any, actions: { type: string; payload: IUser }) => {
      state = actions.payload;
      return state;
    },
    resetUser: (state: any) => {
      state = {};
      return state;
    },
  },
});

export const { getUserData, resetUser } = User.actions;
