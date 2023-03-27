import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export function SearchUser({ userPosts }) {
  const { setHeaderStatus } = useContext(UserContext);
  setHeaderStatus(true);
  function Posts(a) {
    return (
      <Post data-test="post">
        <LikePfp>
          <OpPfp src={a.user_url} />
          <ion-icon
            style={{ color: a.usuario_liked ? "red" : "" }}
            name="heart"
            size="small"
          ></ion-icon>
          <Like>{a.total_likes}LIKES</Like>
        </LikePfp>
        <PostText>
          <OpName>{a.username}</OpName>
          <PostMessage>{a.headline}</PostMessage>
          <p>Url do Post: {a.post_url}</p>
        </PostText>
      </Post>
    );
  }

  return (
    <All>
      <section>
        <img src={userPosts[0].user_url} alt="userPic" />
        <span>
          {userPosts[0].username}
          's posts
        </span>
      </section>

      {userPosts[0].headline === undefined
        ? "No posts yet"
        : userPosts.map((a) => Posts(a))}
    </All>
  );
}

const All = styled.div`
  background-color: #4d4d4d;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  gap: 20px;

  section {
    display: flex;
    width: 611px;
    margin: auto;
    margin-top: 80px;
    font-weight: 700;
    font-size: 43px;
    color: white;
    align-items: center;
    gap: 5px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;

const Post = styled.div`
  display: flex;
  background-color: #171717;
  border-radius: 16px;
  width: 611px;
  height: 276px;
  padding-left: 18px;
  padding-top: 17px;
  padding-bottom: 20px;
  padding-right: 21px;
  box-sizing: border-box;
  margin: auto;
  position: relative;
`;
const OpPfp = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 26.5px;
  margin-bottom: 19px;
`;

const OpName = styled.div`
  display: flex;
  color: #ffffff;
  font-size: 19px;
  line-height: 23px;
`;
const PostText = styled.div`
  display: flex;
  margin-left: 17px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding-top: 2px;

  p {
    margin-top: 10px;
    color: white;
    word-break: break-all;
  }
`;
const PostMessage = styled.div`
  display: flex;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;
  margin-top: 8px;
`;
const Like = styled.p`
  margin-top: 4px;
`;
const LikePfp = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  align-items: center;
  color: #ffffff;

  ion-icon {
    color: {
    }
  }
`;
