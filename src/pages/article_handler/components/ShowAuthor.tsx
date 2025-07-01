import { useSelector } from "react-redux";
import { selectUserById } from "../../../slices/userSlice";

import { type ShowAuthorProps, type User } from "../../..";

const ShowAuthor = ({ userId }: ShowAuthorProps) => {
  const author: User | undefined = useSelector((state: any) => selectUserById(state, userId));

  return <span>توسط {author ? author.fullname : "نویسنده ی ناشناس"}</span>;
};

export default ShowAuthor;
