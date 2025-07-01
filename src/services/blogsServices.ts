import axios from "axios";

const SERVER_URL = "http://localhost:9000";


interface Blog {
  id: string;
  title: string;
  content: string;
}

interface User {
  id: string;
  name: string;
}

// @desc Get All Blogs
// route GET "http://localhost:9000/blogs"
export const getAllBlogs = () => {
  const url = `${SERVER_URL}/blogs`;
  return axios.get<Blog[]>(url);
};

// @desc Get Any Blog
// route GET "http://localhost:9000/blogs/:blogId"
export const getBlog = (blogId: string) => {
  const url = `${SERVER_URL}/blogs/${blogId}`;
  return axios.get<Blog>(url);
};

// @desc Get All Users
// route GET "http://localhost:9000/users"
export const getAllUsers = () => {
  const url = `${SERVER_URL}/users`;
  return axios.get<User[]>(url);
};

// @desc Get User with userId
// route GET "http://localhost:9000/users/:userId"
export const getUser = (userId: string) => {
  const url = `${SERVER_URL}/users/${userId}`;
  return axios.get<User>(url);
};

// @desc Delete User with userId
// route DELETE "http://localhost:9000/users/:userId"
export const deleteUser = (userId: string) => {
  const url = `${SERVER_URL}/users/${userId}`;
  return axios.delete(url);
};

// @desc Create New Users
// route POST "http://localhost:9000/users"
export const createUser = (user: User) => {
  const url = `${SERVER_URL}/users/`;
  return axios.post<User>(url, user);
};

// @desc Create New Blog
// route POST "http://localhost:9000/blogs"
export const createBlog = (blog: Blog) => {
  const url = `${SERVER_URL}/blogs`;
  return axios.post<Blog>(url, blog);
};

// @desc Update Blog
// route PUT "http://localhost:9000/blogs/:blogId"
export const updateBlog = (blog: Blog, blogId: string) => {
  const url = `${SERVER_URL}/blogs/${blogId}`;
  return axios.put<Blog>(url, blog);
};

// @desc Delete Blog
// route DELETE "http://localhost:9000/blogs/:blogId"
export const deleteBlog = (blogId: string) => {
  const url = `${SERVER_URL}/blogs/${blogId}`;
  return axios.delete(url);
};