import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Slice Imports

import signUpReducer from "../auth/signupSlice";
import loginReducer from "../auth/loginSlice";
import profileReducer from "../auth/profileSlice";

// Api Imports

import { authenticationApi } from "../api/authenticatonApi";
import { profileApi } from "../api/profileApi";
import { productsApi } from "../api/productsApi";

export const store = configureStore({
  reducer: {
    // reducers
    signupForm: signUpReducer,
    loginForm: loginReducer,
    profileForm: profileReducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authenticationApi.middleware,
      profileApi.middleware,
      productsApi.middleware
    ),
});

setupListeners(store.dispatch);
