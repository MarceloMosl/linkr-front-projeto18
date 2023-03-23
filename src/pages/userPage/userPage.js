import React, { useEffect } from "react";
import axios from "axios";
import { SearchUser } from "../../components/searchUser";
import { useParams } from "react-router-dom";

export function UserPage() {
  const token = localStorage.getItem("token");
  const header = { headers: { Authorization: `Bearer ${token}` } };
  const { id } = useParams();
  const [userPosts, setUserPosts] = React.useState([
    { user_url: "", posts_url: "" },
  ]);

  useEffect(() => {
    const response = axios.get(
      `${process.env.REACT_APP_API_URL}/user/${id}`,
      header
    );
    response.then((res) => setUserPosts(res.data));

    response.catch((error) => console.log(error));
  }, [id]);

  return <SearchUser userPosts={userPosts} />;
}
