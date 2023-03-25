import React, { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext.js";
import { useNavigate,useParams } from "react-router-dom";
import {
  HashTagContainer,
  HashTagBox,
  HashTagHeaderContainer,
  PostArea,
} from "./styled.js";
import TrendingCard from "../../components/TrendingCard/TrendingCard.js";
import RenderHashTagsPostsPosts from "./HashTagsPosts/HashTagsPosts.js";

export default function HashTagPage() {
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
    <HashTagContainer>
      <HashTagBox>
        <PostArea>
          <HashTagHeader />
          <RenderHashTagsPostsPosts/>
        </PostArea>
        <TrendingCard/>
      </HashTagBox>
    </HashTagContainer>
  );
}

export function HashTagHeader() {
  const {hashtag} = useParams()
  return (
    <HashTagHeaderContainer>
     <h1 data-test = "hashtag-title">#{hashtag}</h1>
    </HashTagHeaderContainer>
  );
}


