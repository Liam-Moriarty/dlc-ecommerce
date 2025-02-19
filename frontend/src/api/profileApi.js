import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}`,
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
        url: "profile/update-profile",
        method: "PUT",
        body: updateProfile,
      }),
      invalidatesTags: ["Client"],
    }),
    changePassword: builder.mutation({
      query: (updatedPassword) => ({
        url: "profile/changePassword",
        method: "PUT",
        body: updatedPassword,
      }),
    }),
    getProfileData: builder.query({
      query: () => ({
        url: "profile/clients",
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
