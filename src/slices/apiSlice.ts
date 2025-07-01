import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { type Blog } from "..";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["BLOG", "USER"],
  endpoints: (builder) => ({
    getBlogs: builder.query<Blog[], void>({
      query: () => "/blogs",
      providesTags: (result = [], error, arg) => [
        "BLOG",
        ...result.map(({ id }) => ({ type: "BLOG" as const, id })),
      ],
    }),
    getBlog: builder.query({
      query: (initialBlogId) => `/blogs/${initialBlogId}`,
      providesTags: (result, error, arg) => [{ type: "BLOG", id: arg }],
    }),
    addNewBlog: builder.mutation({
      query: (initialBlog) => ({
        url: "/blogs",
        method: "POST",
        body: initialBlog,
      }),
      invalidatesTags: ["BLOG"],
    }),
    editBlog: builder.mutation({
      query: (blog) => ({
        url: `blogs/${blog.id}`,
        method: "PUT",
        body: blog,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "BLOG", id: arg.id }],
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `/blogs/${blogId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BLOG"],
    }),
    editReaction: builder.mutation({
      query: ({ blogId, updatedReactions }) => ({
        url: `/blogs/${blogId}`,
        method: "PATCH",
        body: { reactions: updatedReactions },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "BLOG", id: arg.id }],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogQuery,
  useAddNewBlogMutation,
  useEditBlogMutation,
  useDeleteBlogMutation,
  useEditReactionMutation,
} = apiSlice;
