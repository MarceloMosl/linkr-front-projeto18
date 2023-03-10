import React, { useEffect } from "react";
import axios from "axios";
import { SearchUser } from "../../components/searchUser";
import { useParams } from "react-router-dom";

export function UserPage() {
  const [userPosts, setUsersPosts] = React.useState([
    { headline: "", post_url: "", user_url: "" },
  ]);

  const token = localStorage.getItem("token");
  const header = { headers: { Authorization: `Bearer ${token}` } };
  const { id } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_API_URL}/user/${id}`,
      header
    );
    promise.then((res) => {
      setUsersPosts(res.data);
    });
    promise.catch((err) => alert(err));
  }, []);

  return <SearchUser userPosts={userPosts} />;
}
