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
import { cartApi } from "../api/cartApi";
import { transactionApi } from "../api/transactionApi";

export const store = configureStore({
  reducer: {
    // reducers
    signupForm: signUpReducer,
    loginForm: loginReducer,
    profileForm: profileReducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authenticationApi.middleware,
      profileApi.middleware,
      productsApi.middleware,
      cartApi.middleware,
      transactionApi.middleware
    ),
});

setupListeners(store.dispatch);
