import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "",
  email: "",
  contacts: "",
  city: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    cleanProfile: (state, action) => {
      return initialState;
    },
  },
});

export const { updateProfile, cleanProfile } = profileSlice.actions;

export default profileSlice.reducer;
