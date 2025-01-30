import { createSlice } from "@reduxjs/toolkit";

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
      localStorage.setItem("email", email);
      localStorage.setItem("token", token);
    },
    logout: (state, action) => {
      state.email = null;
      state.token = null;
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.removeItem("signup");
      authenticationApi.util.resetApiState();
    },
  },
});

// Log the initialState
console.log("Initial State:", initialState);

export const { createLogin, logout } = loginSlice.actions;

export default loginSlice.reducer;
