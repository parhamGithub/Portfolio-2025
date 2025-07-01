import { Link, useParams, useNavigate } from "react-router-dom";
import {
  useGetBlogQuery,
  useDeleteBlogMutation,
} from "../../../slices/apiSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionButtons from "./ReactionButtons";
import Spinner from "./Spinner";

const SingleBlogPage = () => {
  const { blogId } = useParams<{ blogId: string }>();

  const { data: blog, isFetching, isSuccess } = useGetBlogQuery(blogId);
  const [deleteBlog] = useDeleteBlogMutation();

  const navigate = useNavigate();

  const handleDelete = async () => {
    if (blog) {
      await deleteBlog(blogId);
      navigate("/article-handler");
    }
  };

  if (!blog) {
    return (
      <section>
        <h2>بلاگی که دنبالش میگردی وجود نداره دوست من</h2>
      </section>
    );
  }

  let content: JSX.Element | null = null;
  if (isFetching) {
    content = <Spinner text="در حال بارگذاری" />;
  } else if (isSuccess) {
    content = (
      <article
        className="blog"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div style={{ margin: "20px", maxWidth: "1000px" }}>
          <h2>{blog.title}</h2>
          <div style={{ marginTop: "10px", marginRight: "20px" }}>
            <ShowTime timestamp={blog.date} />
            <ShowAuthor userId={blog.user} />
          </div>
          <p className="blog-content">{blog.content}</p>
          <ReactionButtons blog={blog} />
          <Link to={`/article-handler/editBlog/${blog.id}`} className="button">
            ویرایش پست
          </Link>
          <button
            className="muted-button"
            style={{ marginRight: "10px" }}
            onClick={handleDelete}
          >
            حذف پست
          </button>
        </div>
        <img
          src={blog.image}
          alt={blog.title}
          style={{ maxHeight: "770px", maxWidth: "1200px" }}
        />
      </article>
    );
  }

  return <>{content}</>;
};

export default SingleBlogPage;
