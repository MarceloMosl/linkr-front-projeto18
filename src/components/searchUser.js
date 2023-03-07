import React, { useEffect } from "react";
import axios from "axios";
export function SearchUser() {
  const [userPosts, setUsersPosts] = React.useState([
    { headline: "", post_url: "" },
  ]);

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/user/1", {
      headers: { Authorization: `Bearer ${"1234"}` },
    });
    promise.then((res) => {
      setUsersPosts(res.data);
    });
    promise.catch((err) => alert(err));
  }, []);

  console.log(userPosts[0].headline);

  return (
    <>
      <div>Pagina do Usuario</div>
      <p>Texto do post: {userPosts[0].headline}</p>
      <p>URL do post: {userPosts[0].post_url}</p>
    </>
  );
}
