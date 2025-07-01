import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
  type PayloadAction,
  type EntityState,
} from "@reduxjs/toolkit";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  updateBlog,
} from "../services/blogsServices";

import { type Blog, type EntityError, type ReactionName } from "..";


export interface BlogsState extends EntityState<Blog, string> {
  status: "idle" | "loading" | "completed" | "failed";
  error: EntityError;
}

const blogAdaptor = createEntityAdapter<Blog>({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState: BlogsState = blogAdaptor.getInitialState({
  status: "idle",
  error: null,
});

export const fetchBlogs = createAsyncThunk<Blog[]>("/blogs/fetchBlogs", async () => {
  const response = await getAllBlogs();
  return response.data;
});

export const deleteApiBlog = createAsyncThunk(
  "/blogs/deleteApiBlog",
  async (initialBlogId: string) => {
    await deleteBlog(initialBlogId);
    return initialBlogId;
  }
);

export const updateApiBlog = createAsyncThunk(
  "/blogs/updateApiBlog",
  async (initialBlog: Blog) => {
    const response = await updateBlog(initialBlog, initialBlog.id);
    return response.data;
  }
);

export const addNewBlog = createAsyncThunk(
  "/blogs/addNewBlog",
  async (initialBlog: Blog) => {
    const response = await createBlog(initialBlog);
    return response.data;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    reactionAdded: (
      state,
      action: PayloadAction<{ blogId: string; reaction: ReactionName }>
    ) => {
      const { blogId, reaction } = action.payload;
      const existingBlog = state.entities[blogId];
      if (existingBlog) {
        existingBlog.reactions[reaction]++;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, _) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "completed";
        blogAdaptor.setAll(state, action.payload);
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as EntityError;
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        blogAdaptor.addOne(state, action.payload);
      })
      .addCase(deleteApiBlog.fulfilled, (state, action) => {
        blogAdaptor.removeOne(state, action.payload);
      })
      .addCase(updateApiBlog.fulfilled, (state, action) => {
        blogAdaptor.upsertOne(state, action.payload);
      });
  },
});

export const {
  selectAll: selectAllBlogs,
  selectById: selectBlogById,
  selectIds: selectBlogIds,
} = blogAdaptor.getSelectors((state) => state.blogs);

export const selectUserBlogs = createSelector(
  [selectAllBlogs, (_, userId) => userId],
  (blogs, userId) => blogs.filter((blog) => blog.user === userId)
);

export const { reactionAdded } =
  blogsSlice.actions;

export default blogsSlice.reducer;
