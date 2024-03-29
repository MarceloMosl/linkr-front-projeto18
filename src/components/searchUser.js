import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TrendingCard from "./TrendingCard/TrendingCard";
import {
  PostContent,
  StyledLikeContainer,
  StyledLikeText,
  StyledUserImg,
  StyledUserName,
} from "../pages/HashTagsPage/HashTagsPosts/styled";
import { BodyPostMessageStyled } from "../pages/HashTagsPage/HashTagsPosts/HashTagsPosts";
import PostMetadata from "./PostContainer/PostMetadata";

export function SearchUser({ userPosts }) {
  const { setHeaderStatus } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [isFollowing, setIsFollowing] = useState("");

  useEffect(() => {
    setHeaderStatus(true);

    const header = { headers: { Authorization: `Bearer ${token}` } };

    axios
      .get(`${process.env.REACT_APP_API_URL}/follow/${id}`, header)

      .then((res) => {
        if (res.data.length === 0) {
          setIsFollowing(false);
        } else {
          setIsFollowing(true);
        }
      })
      .catch((error) => {
        alert("Ops! Algo não está certo, tente novamente!.");
        console.log(error);
      });
  }, [id, setHeaderStatus, token]);

  function handleFollow() {
    const header = { headers: { Authorization: `Bearer ${token}` } };

    const promise = axios.post(
      `${process.env.REACT_APP_API_URL}/user/${id}`,
      {},
      header
    );

    promise.then((res) => {
      setIsFollowing(true);
    });
    promise.catch((error) => {
      alert("Ops! Algo não está certo, tente novamente!.");
      console.log(error);
    });
  }

  function handleUnfollow() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.delete(
      `${process.env.REACT_APP_API_URL}/user/${id}`,
      config
    );

    promise.then((res) => {
      setIsFollowing(false);
    });
    promise.catch((error) => {
      alert("Ops! Algo não está certo, tente novamente!.");
      console.log(error);
    });
  }

  function RenderPosts(p) {
    return (
      <>
        <Post key={p.id} postId={p.id} data-teste="post">
          <StyledLikeContainer>
            <StyledUserImg src={p.user_url} />
            <ion-icon
              style={{ color: p.usuario_liked ? "red" : "" }}
              name="heart"
              size="small"
            ></ion-icon>
            <StyledLikeText>{p.total_likes} LIKES</StyledLikeText>
          </StyledLikeContainer>
          <PostContent>
            <PostText>
              <StyledUserName data-teste="username">
                {p.username}
              </StyledUserName>
              <PostMessage data-teste="description">
                <BodyPostMessageStyled body={p.headline} />
              </PostMessage>
            </PostText>
            <PostMetadata
              title={p.title}
              url={p.post_url}
              description={p.description}
              image={p.image}
            />
          </PostContent>
        </Post>
      </>
    );
  }

  return (
    <MainContainer>
      <section>
        <img src={userPosts[0].user_url} alt="userPic" />
        <div>
          <span>
            {userPosts[0].username}
            's posts
            {isFollowing ? (
              <UnfollowButton onClick={() => handleUnfollow()}>
                Unfollow
              </UnfollowButton>
            ) : (
              <FollowButton onClick={() => handleFollow()}>Follow</FollowButton>
            )}
          </span>
        </div>
      </section>
      <ContentBox>
        <All>
          <PostArea>
            {userPosts[0].headline === undefined
              ? "No posts yet"
              : userPosts.map((p) => RenderPosts(p))}
          </PostArea>
        </All>
        <TrendingCard />
      </ContentBox>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  background-color: #4d4d4d;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;

  section {
    display: flex;
    width: 100%;
    /* margin: auto; */
    margin-left: 25%;
    margin-top: 85px;
    font-weight: 700;
    font-size: 43px;
    color: white;
    /* align-items: center; */
    /* justify-content:center; */
    /* gap: 5px; */
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    div {
      display: flex;
      /* flex-direction: column; */
      /* align-items: flex-start; */
      /* gap: 5px; */
      margin-left: 10px;
      font-size: 43px;
    }
  }
`;

const ContentBox = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 80vw;
  margin-top: 32px;
  /* margin: auto; */

  @media (max-width: 950px) {
    width: 100vw;
  }
`;

const All = styled.div`
  display: flex;

  /* align-items: center; */

  flex-direction: column;
`;

const PostArea = styled.div`
  /* @media (max-width: 950px) {
    margin: auto;
  }
  @media (max-width: 750px) {
    margin: auto;
    width: 100vw;
  }
  width: 70%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
  /* margin: auto; */
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

const FollowButton = styled.button`
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  font-weight: bold;
  margin-left: 300px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #1864ab;
  }

  &:active {
    background-color: #0e3a64;
  }
`;

const UnfollowButton = styled.button`
  background-color: white;
  color: #1877f2;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  font-weight: bold;
  margin-left: 300px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #1864ab;
  }

  &:active {
    background-color: #0e3a64;
  }
`;
