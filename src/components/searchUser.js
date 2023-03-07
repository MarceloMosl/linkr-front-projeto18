import React, { useEffect } from "react";
import axios from "axios";
export function SearchUser() {
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

  console.log(userPosts);
  console.log(user);

  return (
    <>
      <div>Pagina do Usuario</div>
      <br></br>
      <p>foto do Usuario: {user.user_url}</p>
      <br></br>
      <p>nome do usuario: {user.username}</p>
      <br></br>
      <p>Texto do post: {userPosts[0].headline}</p>
      <br></br>
      <p>URL do post: {userPosts[0].post_url}</p>
    </>
  );
}
