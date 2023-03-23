import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import DisplayPost from "../../components/PostContainer/post.js";
import TrendingCard from "../../components/TrendingCard/TrendingCard.js";
import UserContext from "../../contexts/UserContext.js";
import { useNavigate, Link } from "react-router-dom";

export function Hashtag() {
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
			<TimeLineContainer>
				<TimeLineBox>
					<PostArea>
						<TimelineHeaderContainer><h1>hashtag</h1></TimelineHeaderContainer>
					</PostArea>
					<TrendingCard />
				</TimeLineBox>
			</TimeLineContainer>
		</>
	);
}

const TimeLineContainer = styled.div`
	display: flex;
	justify-content: center;
	background-color: #4d4d4d;
	min-height: 100vh;

`;

const TimeLineBox = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80vw;
	margin: auto;

	@media (max-width: 950px) {
		width: 100vw;
	}
`;


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

const TimelineHeaderContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  padding: 15px;
  box-sizing: border-box;
  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #ffffff;
  }
`;
