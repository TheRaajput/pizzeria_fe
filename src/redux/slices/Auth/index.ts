import { createSlice } from "@reduxjs/toolkit";
export const Auth = createSlice({
  name: "auth",
  initialState: { token: null },
  reducers: {
    accesToken: (state: any, action: { type: string; payload: any }) => {
      state.token = action.payload;
    },
    logOut: (state: any) => {
      state.token = null;
    },
  },
});

export const { accesToken, logOut } = Auth.actions;
