import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "../../../slices/userSlice";
import { useMemo } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useGetBlogsQuery } from "../../../slices/apiSlice";

import { type RootState, type User, type Blog } from "../../../";


const UserPage = () => {
  const { userId } = useParams<{ userId: string }>();

  const user = useSelector((state: RootState) =>
    selectUserById(state, userId!)
  );

  const selectUserBlogs = useMemo(() => {
    const emptyArray: Blog[] = [];

    return createSelector(
      (res) => res.data,
      (_res, userIdParam) => userIdParam,
      (data: Blog[] | undefined, userIdParam: string): Blog[] =>
        data?.filter((blog) => blog.user === userId) ?? emptyArray
    );
  }, []);

  const {
    userBlogs,
  } = useGetBlogsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      userBlogs: selectUserBlogs(result, userId!),
    }),
  })

  const blogTitles = userBlogs.map((blog: Blog) => (
    <li key={blog.id}>
      <Link to={`/article-handler/blogs/${blog.id}`}>{blog.title}</Link>
    </li>
  ));

  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  return (
    <section style={{ display: "flex", flexDirection: "row-reverse" }}>
      <img
        src={user.image}
        alt={user.fullname}
        style={{ maxHeight: "770px", maxWidth: "600px", marginRight: "20px" }}
      />
      <div>
        <h2>{user.fullname}</h2>
        <ul>
          {userBlogs.length > 0 ? (
            blogTitles
          ) : (
            <li style={{ listStyleType: "none" }}>
              نویسنده ما هیچ پستی تا به الان منتشر نکرده
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default UserPage;
