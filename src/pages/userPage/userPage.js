import React, { useEffect } from "react";
import axios from "axios";
import { SearchUser } from "../../components/searchUser";
export function UserPage() {
  const [userPosts, setUsersPosts] = React.useState([
    { headline: "", post_url: "" },
  ]);
  const token = localStorage.getItem("token");
  const [user, setUser] = React.useState([]);
  const header = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_API_URL}/user/1`,
      header
    );
    promise.then((res) => {
      setUsersPosts(res.data[0]);
      setUser(res.data[1][0]);
    });
    promise.catch((err) => alert(err));
  }, []);

  return <SearchUser user={user} userPosts={userPosts} />;
}
