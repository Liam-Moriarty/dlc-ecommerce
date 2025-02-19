import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().signupForm.token; // Retrieve the token from Redux state
    if (token) {
      headers.set("Authorization", `Bearer ${token}`); // Attach token to headers
    }
    return headers; // Return modified headers
  },
});

export const authenticationApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    signupUser: builder.mutation({
      query: (userData) => ({
        url: "sign-up",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useSignupUserMutation } =
  authenticationApi;
