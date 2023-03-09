import React, { useEffect } from "react";
import axios from "axios";
import { SearchUser } from "../../components/searchUser";
export function UserPage() {
  const [userPosts, setUsersPosts] = React.useState([
    { headline: "", post_url: "" },
  ]);
  const [user, setUser] = React.useState([]);

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/user/1", {
      headers: { Authorization: `Bearer ${"1234"}` },
    });
    promise.then((res) => {
      setUsersPosts(res.data[0]);
      setUser(res.data[1][0]);
    });
    promise.catch((err) => alert(err));
  }, []);

  return <SearchUser user={user} userPosts={userPosts} />;
}
