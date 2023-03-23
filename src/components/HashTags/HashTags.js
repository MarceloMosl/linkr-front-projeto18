import { HashTagsContainer, StyledLink } from "./styled";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HashTags } from "./styled";
import TimelineContext from "../../contexts/TimelineContext";
import useFetchHashtag from "../hooks/fetchHashtags.js";

export default function HashTagsList() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const {
    isResponseEdited,
    setIsResponseEdited,
    isPostDeleted,
    setIsPostDeleted,
    isPostCreated,
    setIsPostCreated,
  } = useContext(TimelineContext);

  const hashtagContent = useFetchHashtag(
    token,
    isResponseEdited,
    isPostDeleted,
    isPostCreated
  );
  
  function handleHashTagClick(clickedHashtag) {
    navigate(`/hashtag/${clickedHashtag}`);
  }

  return (
    <HashTagsContainer>
      {hashtagContent.map((h) => (
        <HashTags
          onClick={() => handleHashTagClick(h.name)}
          data-test="hashtag"
        >
          <span>{h.name}</span>
        </HashTags>
      ))}
    </HashTagsContainer>
  );
}
