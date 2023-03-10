import { HashTagsContainer, StyledLink } from "./styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashTags } from "./styled";
import axios from "axios";

export default function HashTagsList() {
  const [hashTags, setHashTags] = useState([]);
  const navigate = useNavigate;

//   useEffect(getHashTagsList(), []);

  async function getHashTagsList() {
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_URL}/hashtags`);

      setHashTags(data);
    } catch (error) {
      alert(error.response);
    }
  }

  function handleHashTagClick(clickedHashtag) {
    navigate(`/hashtag/${clickedHashtag}`);
  }

  return (
    <HashTagsContainer>
      {hashTags.map((h) => (
        <HashTags
          onClick={() => handleHashTagClick(h.name)}
          data-test="hashtag"
        >
          <span># {h.name}</span>
        </HashTags>
      ))}
    </HashTagsContainer>
  );
}
