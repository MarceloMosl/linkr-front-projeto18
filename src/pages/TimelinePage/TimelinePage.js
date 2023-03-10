import React, { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import DisplayPost from "../../components/post.js";
import TrendingCard from "../../components/TrendingCard/TrendingCard.js";
import { TimeLineBox, TimeLineContainer } from "./styled.js";
import { TimelineHeader } from "../../components/TimelineHeader/TimelineHeader.js";
import { CreateNewPost } from "../../components/CreateNewPost/CreateNewPost.js";
import Header from "../../components/Header/Header.js";
import UserContext from "../../contexts/UserContext.js";

/*
const url = 'https://www.google.com';
const urlMetadata = require('url-metadata');
urlMetadata(url).then(metadata => {
    console.log(metadata)
}
)
*/
export function Timeline() {
  const { setHeaderStatus } = useContext(UserContext);
  setHeaderStatus(true);
  
  return (
    <>
      <Header/>
    <TimeLineContainer>
      <TimeLineBox>
      <PostArea>
      <TimelineHeader/>
      <CreateNewPost/>
        <DisplayPost></DisplayPost>
      </PostArea>
      <TrendingCard />
      </TimeLineBox>
    </TimeLineContainer>
    </>
  );
}

const PostArea = styled.div`
  /* display: flex;
  width: 100%;
  height: 900px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #4d4d4d;
  box-sizing: border-box; */
`;

  

