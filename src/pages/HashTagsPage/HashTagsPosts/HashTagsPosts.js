
import { useNavigate,useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PostMetadata from "../../../components/PostContainer/PostMetadata";
import {
  PostContainer,
  Post,
  PostContent,
  StyledUserImg,
  StyledUserName,
  PostText,
  PostMessage,
  StyledLikeText,
  StyledLikeContainer,
} from "./styled";
import { ReactTagify } from "react-tagify";

export default function RenderHashTagsPostsPosts() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [hashtagContent, setHashtagContent] = useState([]);
  const {hashtag} = useParams()
  console.log(hashtag)

  useEffect(() => {
		const URL = `${process.env.REACT_APP_API_URL}/hashtags/${hashtag}`;
		const header = { headers: { Authorization: `Bearer ${token}` } };
		const getRegistry = axios.get(URL, header);
		getRegistry.then((response) => {
			setHashtagContent(response.data);
		});
		getRegistry.catch((error) => {
			console.log(error);
		});
	}, [token,hashtag]);


  return (
    <PostContainer>
      {hashtagContent.map((obj) => (
        <Post key={obj.id} postId={obj.id} data-teste="post">
          <StyledLikeContainer>
            <StyledUserImg
              onClick={() => navigate(`/user/${obj.user_id}`)}
              src={obj.user_url}
            />
            <ion-icon name="heart-outline" size="small"></ion-icon>
            <StyledLikeText>{obj.total_likes} LIKES</StyledLikeText>
          </StyledLikeContainer>
          <PostContent>
            <PostText>
              <StyledUserName
                onClick={() => navigate(`/user/${obj.user_id}`)}
                data-teste="username"
              >
                {obj.username}
              </StyledUserName>
              <PostMessage data-teste="description">
              <BodyPostMessageStyled body={obj.headline}/>
              </PostMessage>
            </PostText>
            <PostMetadata
              title={obj.title}
              url={obj.post_url}
              description={obj.description}
              image={obj.image}
             />
          </PostContent>
        </Post>
      ))}
    </PostContainer>
  );
}

export function BodyPostMessageStyled({ body } ) {
  
    const tagStyle = {
      color: "white",
      fontWeight: 500
    };
  
    return (
      <ReactTagify tagStyle={tagStyle} >
        <p>{typeof body === "string" ? body : JSON.stringify(body)}</p>
      </ReactTagify>
    );
  }