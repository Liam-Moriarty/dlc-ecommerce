import { createSlice } from "@reduxjs/toolkit";
import { authenticationApi } from "../api/authenticatonApi";

const initialState = {
  email: localStorage.getItem("email") || null,
  token: localStorage.getItem("token") || null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    createLogin: (state, action) => {
      const { email, token } = action.payload;
      state.email = email;
      state.token = token;
    },
    logout: (state, action) => {
      state.email = null;
      state.token = null;
      localStorage.clear();

      authenticationApi.util.resetApiState();
    },
  },
});

export const { createLogin, logout } = loginSlice.actions;

export default loginSlice.reducer;
