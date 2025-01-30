import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Slice Imports

import signUpReducer from "../auth/signupSlice";
import loginReducer from "../auth/loginSlice";

// Api Imports

import { authenticationApi } from "../api/authenticatonApi";

export const store = configureStore({
  reducer: {
    // reducers
    signupForm: signUpReducer,
    logoutForm: loginReducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authenticationApi.middleware),
});

setupListeners(store.dispatch);
