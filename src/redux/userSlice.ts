import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const slice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated:
      Cookies.get("publickey") && Cookies.get("privatekey") ? true : false,
    publicKey: Cookies.get("publickey") ?? "",
    privateKey: Cookies.get("privatekey") ?? "",
  },
  reducers: {
    authenticateUser(state, { payload }) {
      Cookies.set("publickey", payload.publicKey);
      Cookies.set("privatekey", payload.privateKey);
      return {
        ...state,
        isAuthenticated: true,
        privateKey: payload.privateKey,
        publicKey: payload.publicKey,
      };
    },
  },
});

export const { authenticateUser } = slice.actions;

export default slice.reducer;
