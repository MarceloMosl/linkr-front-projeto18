import React, { useEffect } from "react";
import axios from "axios";
export function SearchUser() {
  const [userPosts, setUsersPosts] = React.useState({});

  useEffect(() => {
    const promise = axios.get(`localhost:5000/user/${1}`, {
      headers: { Authorization: `Bearer ${"123456"}` },
    });

    promise.then(setUsersPosts);
  }, []);

  return <>OLA</>;
}
