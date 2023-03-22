import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import DisplayPost from "../../components/PostContainer/post.js";
import TrendingCard from "../../components/TrendingCard/TrendingCard.js";
import { TimeLineBox, TimeLineContainer } from "./styled.js";
import { TimelineHeader } from "../../components/TimelineHeader/TimelineHeader.js";
import { CreateNewPost } from "../../components/CreateNewPost/CreateNewPost.js";
import Header from "../../components/Header/Header.js";
import UserContext from "../../contexts/UserContext.js";
import { useNavigate, Link } from "react-router-dom";

export function Timeline() {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			alert("authentication failed, please login");
			navigate("/");
		}
	}, [token]);

	const { setHeaderStatus } = useContext(UserContext);
	setHeaderStatus(true);


  return (
    <>
      <Header />
      <TimeLineContainer>
        <TimeLineBox>
          <PostArea>
            <TimelineHeader />
            <CreateNewPost />
            <DisplayPost/>
          </PostArea>
          <TrendingCard />
        </TimeLineBox>
      </TimeLineContainer>
    </>
  );

}

const PostArea = styled.div`
	@media (max-width: 950px) {
		margin: auto;
	}
	@media (max-width: 750px) {
		margin: auto;
		width: 100vw;
	}
	width: 70%;
`;
