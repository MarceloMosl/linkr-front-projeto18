import React, { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext.js";
import { useNavigate } from "react-router-dom";
import {
  HashTagContainer,
  HashTagBox,
  HashTagHeaderContainer,
  PostArea,
} from "./styled.js";
import TrendingCard from "../../components/TrendingCard/TrendingCard.js";

export default function HashTagPage(renderHashTag) {
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
          <HashTagHeader renderHashTag={renderHashTag}/>
        </PostArea>
        <TrendingCard/>
      </HashTagBox>
    </HashTagContainer>
  );
}

export function HashTagHeader(renderHashTag) {
  return (
    <HashTagHeaderContainer>
     <h1>{JSON.stringify(renderHashTag)}</h1>
    </HashTagHeaderContainer>
  );
}


