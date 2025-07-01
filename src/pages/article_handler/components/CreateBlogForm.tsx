import { useState, type ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import { useAddNewBlogMutation } from "../../../slices/apiSlice";
import { selectAllUsers } from "../../../slices/userSlice";

import { type User, type NewBlogPayload} from "../../.."


const CreateBlogForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const [addNewBlog, { isLoading }] = useAddNewBlogMutation();

  const navigate = useNavigate();

  const users: User[] = useSelector(selectAllUsers);
  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const onAuthorChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setUserId(e.target.value);
  const onImageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setImage(e.target.value);

  const canSave: boolean = [title, content, userId].every(Boolean) && !isLoading;

  const handleSubmitForm = async () => {
    if (canSave) {
      try {
        await addNewBlog({
          id: nanoid(),
          date: new Date().toISOString(),
          title,
          content,
          image,
          user: userId,
          reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
          },
        } as NewBlogPayload).unwrap();
        setTitle("");
        setContent("");
        setImage("");
        setUserId("");
        navigate("/article-handler");
      } catch (error: any) {
        console.error("Failed to save the blog", error);
      }
    }
  };

  return (
    <section>
      <h2>ساخت پست جدید</h2>
      <form autoComplete="off">
        <label htmlFor="blogTitle">عنوان پست</label>
        <input
          type="text"
          id="blogTitle"
          name="blogTitle"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="blogAuthor">نویسنده: </label>
        <select id="blogAuthor" value={userId} onChange={onAuthorChange}>
          <option value="">انتخاب نویسنده</option>
          {users.map((user: User) => (
            <option key={user.id} value={user.id}>
              {user.fullname}
            </option>
          ))}
        </select>
        <label htmlFor="blogImage">آدرس عکس</label>
        <textarea
          id="blogImage"
          name="blogImage"
          value={image}
          onChange={onImageChange}
        />
        <label htmlFor="blogContent">محتوای اصلی</label>
        <textarea
          id="blogContent"
          name="blogContent"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={handleSubmitForm} disabled={!canSave}>
          ذخیره پست
        </button>
      </form>
    </section>
  );
};

export default CreateBlogForm;