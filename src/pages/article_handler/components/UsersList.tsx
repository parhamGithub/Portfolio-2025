import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectAllUsers,
  useAddNewUserMutation,
  useDeleteUserMutation,
} from "../../../slices/userSlice";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";

import { type User, type NewUserPayload } from "../../..";


const UsersList = () => {
  const [user, setUser] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const users: User[] = useSelector(selectAllUsers);

  const [addNewUser] = useAddNewUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const onUserChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);
  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setImage(e.target.value);

  const canSave: boolean = Boolean(user);

  const handleSubmitForm = async () => {
    if (canSave) {
      try {
        const newUser: NewUserPayload = {
          id: nanoid(),
          fullname: user,
          image: image,
        };
        await addNewUser(newUser).unwrap();
        setUser("");
        setImage("");
      } catch (error: any) {
        console.error("Failed to add new user:", error);
      }
    }
  };

  const handleDelete = async (userId: string) => {
    try {
      await deleteUser(userId).unwrap();
    } catch (error: any) {
      console.error("Failed to delete user:", error);
    }
  };

  const renderedUsers = users.map((user: User) => (
    <li key={user.id}>
      <Link to={`/article-handler/users/${user.id}`}>{user.fullname}</Link>
      &nbsp;
      <Link
        style={{ marginRight: "10px", color: "tomato" }}
        onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
          event.preventDefault();
          handleDelete(user.id);
        }}
      >
        &otimes;
      </Link>
    </li>
  ));

  return (
    <section>
      <h2>نویسندگان</h2>
      <form autoComplete="off">
        <label htmlFor="user">نام نویسنده</label>
        <input
          type="text"
          id="user"
          name="user"
          value={user}
          onChange={onUserChange}
        />
        <label htmlFor="userImage">آدرس عکس نویسنده</label>
        <input
          type="text"
          id="userImage"
          name="userImage"
          value={image}
          onChange={onImageChange}
        />
        <button type="button" onClick={handleSubmitForm} disabled={!canSave}>
          ذخیره نویسنده جدید
        </button>
      </form>
      <ul style={{ marginTop: "20px" }}>{renderedUsers}</ul>
    </section>
  );
};

export default UsersList;