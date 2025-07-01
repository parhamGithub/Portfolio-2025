import { useState, type ChangeEvent, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEditBlogMutation, useGetBlogQuery } from "../../../slices/apiSlice";


const EditBlogForm = () => {
  const { blogId } = useParams<{ blogId: string }>();

  const { data: blog } = useGetBlogQuery(blogId!);
  const [updateBlog] = useEditBlogMutation();

  const [title, setTitle] = useState<string>(blog?.title || "");
  const [content, setContent] = useState<string>(blog?.content || "");
  const [image, setImage] = useState<string>(blog?.image || "");

  const navigate = useNavigate();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setImage(blog.image);
    }
  }, [blog]);

  if (!blog) {
    return (
      <section>
        <h2>بلاگی که دنبالش میگردی وجود نداره دوست من</h2>
      </section>
    );
  }

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const onImageChange = (e: ChangeEvent<HTMLInputElement>) =>
    setImage(e.target.value);

  const handleSubmitForm = async () => {
    if (title && content) {
      try {
        await updateBlog({
          ...blog,
          title,
          image,
          content,
        }).unwrap();
        navigate(`/article-handler/blogs/${blog.id}`);
      } catch (error: any) {
        console.error("Failed to save the blog", error);
      }
    }
  };

  return (
    <section>
      <h2>ویرایش پست</h2>
      <form autoComplete="off">
        <label htmlFor="blogTitle">عنوان پست: </label>
        <input
          type="text"
          id="blogTitle"
          name="blogTitle"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="blogImage">آدرس عکس: </label>
        <input
          type="text"
          id="blogImage"
          name="blogImage"
          value={image}
          onChange={onImageChange}
        />
        <label htmlFor="blogContent">محتوای اصلی: </label>
        <textarea
          id="blogContent"
          name="blogContent"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={handleSubmitForm}>
          ذخیره پست
        </button>
      </form>
    </section>
  );
};

export default EditBlogForm;