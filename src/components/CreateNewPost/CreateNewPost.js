import { useState, useContext } from "react";
import {
  CreateNewPostContainer,
  Input,
  PostBox,
  StyledForm,
  StyledPostTitle,
  StyledUserImg,
  UserImgBox,
} from "./styled";
import axios from "axios";
import TimelineContext from "../../contexts/TimelineContext";


export function CreateNewPost() {
  const [link, setUrl] = useState("");
  const [description, setPostDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const user_url = localStorage.getItem("user_url");


    const {
        isPostCreated,  
        setIsPostCreated,
            } = useContext(TimelineContext);


  async function addNewPost(event) {
    event.preventDefault();
    setIsLoading(true);

    const body = { link, description };

    const URL = `${process.env.REACT_APP_API_URL}`;
    const header = { headers: { Authorization: `Bearer ${token}` } };
    const createPost = axios.post(`${URL}/posts`, body, header);
    setIsPostCreated(true);

    createPost.then((response) => {
      setIsLoading(false);
      setUrl("");
      setPostDescription("");
      setIsPostCreated(false);
    });
    createPost.catch((err) => {
      alert("There was an error publishing your link");
      console.log(err)
      setIsLoading(false);
      setUrl("");
      setPostDescription("");
    });
  }

  return (
    <CreateNewPostContainer data-test="publish-box">
      <UserImgBox>
        <StyledUserImg src={user_url} />
      </UserImgBox>

      <PostBox>
        <StyledPostTitle>What are you going to share today?</StyledPostTitle>
        <StyledForm onSubmit={addNewPost}>
          <Input
            data-test="link"
            className="inputUrl"
            type="url"
            placeholder="http://..."
            value={link}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isLoading}
            required
          />
          <Input
            data-test="description"
            className="inputDescription"
            type="text"
            placeholder="Awesome article about #javascript"
            value={description}
            onChange={(e) => setPostDescription(e.target.value)}
            disabled={isLoading}
            required
          />
          <button type="submit" disabled={isLoading} data-test="publish-btn">
            {isLoading ? "Publishing..." : "Publicar"}
          </button>
        </StyledForm>
      </PostBox>
    </CreateNewPostContainer>
  );
}
