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

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  tagTypes: ["Favorites"],
  baseQuery,
  endpoints: (builder) => ({
    addFavorites: builder.mutation({
      query: (products) => ({
        url: "favorites/add-favorites",
        method: "POST",
        body: products,
      }),
      invalidatesTags: ["Favorites"],
    }),
    getFavorites: builder.query({
      query: () => "favorites/get-favorites",
      providesTags: ["Favorites"],
    }),
    deleteFavorite: builder.mutation({
      query: (deletedItem) => ({
        url: "favorites/delete-favorites",
        method: "DELETE",
        body: deletedItem,
      }),
      invalidatesTags: ["Favorites"],
    }),
  }),
});

export const {
  useAddFavoritesMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery,
} = favoritesApi;
