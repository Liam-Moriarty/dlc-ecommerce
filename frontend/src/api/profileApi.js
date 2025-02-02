import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/profile/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().loginForm.token; // Access token from Redux state
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const profileApi = createApi({
  reducerPath: "profileApi",
  tagTypes: ["Client"],
  baseQuery,
  endpoints: (builder) => ({
    updatedProfile: builder.mutation({
      query: (updateProfile) => ({
        url: "update-profile",
        method: "PUT",
        body: updateProfile,
      }),
      invalidatesTags: ["Client"],
    }),
    changePassword: builder.mutation({
      query: (updatedPassword) => ({
        url: "changePassword",
        method: "PUT",
        body: updatedPassword,
      }),
    }),
    getProfileData: builder.query({
      query: () => ({
        url: "clients",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useUpdatedProfileMutation,
  useChangePasswordMutation,
  useGetProfileDataQuery,
} = profileApi;
