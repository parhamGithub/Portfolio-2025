import { useMemo } from "react";

import { useGetBlogsQuery } from "../../../slices/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionButtons from "./ReactionButtons";
import Spinner from "./Spinner";

import { type Blog as BlogType, type BlogProps } from "../../../";


let Blog = ({blog}: BlogProps ) => {
  return (
    <>
      {
        <article
          className="blog-excerpt"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3>{blog.title}</h3>
            <div style={{ marginTop: "10px", marginRight: "20px" }}>
              <ShowTime timestamp={blog.date} />
              <ShowAuthor userId={blog.user} />
            </div>
            <p className="blog-content">{blog.content.substring(0, 100)}</p>
            <ReactionButtons blog={blog} />
            <Link
              to={`/article-handler/blogs/${blog.id}`}
              className="button muted-button"
            >
              دیدن کامل پست
            </Link>
          </div>
          <img
            src={blog.image}
            alt={blog.title}
            style={{ maxWidth: "350px", maxHeight: "250px" }}
          />
        </article>
      }
    </>
  );
};

const BlogsList = () => {
  const {
    data: blogs = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBlogsQuery();

  const navigate = useNavigate();

  const sortedBlogs: BlogType[] = useMemo(() => {
    const sortedBlogs = blogs.slice();
    sortedBlogs.sort((a, b) => b.date.localeCompare(a.date));
    return sortedBlogs;
  }, [blogs]);

  let content: JSX.Element | null;

  if (isLoading) {
    content = <Spinner text="بارگذاری..." />;
  } else if (isSuccess) {
    content = sortedBlogs.map((blog: BlogType) => (
      <Blog key={blog.id} blog={blog} />
    ));
  } else if (isError) {
    let errorMessage = "مشکلی پیش آمده...";
    if (error && 'status' in error) {
        errorMessage = `Error ${error.status}: ${(error.data as any)?.message || 'Unknown error'}`;
    } else if (error && 'message' in error) {
        errorMessage = `Error: ${error.message}`;
    }
    content = <div>{errorMessage}</div>;
  } else {
    content = null;
  }

  return (
    <section className="blogs-list">
      <button
        className="full-button accent-button"
        onClick={() => {
          navigate("/article-handler/blogs/create-blog");
        }}
        style={{ marginTop: "1em" }}
      >
        ساخت پست جدید
      </button>
      <h2>تمامی پست ها</h2>
      {content}
    </section>
  );
};

export default BlogsList;
