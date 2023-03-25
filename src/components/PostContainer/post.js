import React from "react";
import styled from "styled-components";
import PostDelete from "../PostEdit/postDelete";
import { useState, useContext } from "react";
import { IoPencil } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import useFetchTimeline from "../hooks/fetchTimeline.js";
import TimelineContext from "../../contexts/TimelineContext";
import PostMetadata from "./PostMetadata";

export default function DisplayPost() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");

  const {
    isResponseEdited,
    setIsResponseEdited,
    isPostDeleted,
    setIsPostDeleted,
    isPostCreated,
  } = useContext(TimelineContext);

  const timelineContent = useFetchTimeline(
    token,
    isResponseEdited,
    isPostDeleted,
    isPostCreated
  );

  function handleEditClick(postId) {
    if (postId === editingPostId) {
      setEditingPostId(null);
      setEditedMessage("");
    } else {
      setEditingPostId(postId);
      setEditedMessage(
        timelineContent.find((obj) => obj.id === postId).headline
      );
    }
  }

  function onKeyPressed(k) {
    if (k.keyCode === 27) {
      setEditingPostId(null);
      setEditedMessage("");
    }
    if (k.keyCode === 13) {
      handleEditSubmit(null, editingPostId);
    }
  }

  function handleInputChange(event) {
    setEditedMessage(event.target.value);
  }

  function handleEditSubmit(event, postId) {
    const data = { headline: editedMessage };
    const header = { headers: { Authorization: `Bearer ${token}` } };
    const updatePromise = axios.patch(
      `${process.env.REACT_APP_API_URL}/posts/${postId}`,
      data,
      header
    );
    updatePromise.then((success) => {
      setIsResponseEdited(success.data);
    });
    updatePromise.catch((error) => {
      alert(error);
    });
    setEditingPostId(null);
    setEditedMessage("");
  }

  async function likePost(post) {
    const header = { headers: { Authorization: `Bearer ${token}` } };

    const promise = axios.post(
      `${process.env.REACT_APP_API_URL}/like`,
      { post_id: post.id, token },
      header
    );

    promise.then(() => window.location.reload());
    promise.catch((err) => alert(err));
  }

  return (
    <Main>
      {timelineContent.length === 0 ? (
        <p data-test="message">There are no posts yet</p>
      ) : (
        timelineContent.map((obj) => (
          <Post key={obj.id} postId={obj.id} data-teste="post">
            <LikePfp>
              <OpPfp
                onClick={() => navigate(`/user/${obj.user_id}`)}
                src={obj.user_url}
              />
              <ion-icon
                onClick={() => likePost(obj)}
                name="heart-outline"
                size="small"
              ></ion-icon>
              <Like>{obj.total_likes} LIKES</Like>
            </LikePfp>

            <PostContent>
              <PostText>
                <OpName
                  onClick={() => navigate(`/user/${obj.user_id}`)}
                  data-teste="username"
                >
                  {obj.username}
                </OpName>
                {editingPostId === obj.id ? (
                  <EditInput
                    onKeyDown={onKeyPressed}
                    onSubmit={(event) => handleEditSubmit(event, obj.id)}
                  >
                    <input
                      type="text"
                      value={editedMessage}
                      onChange={handleInputChange}
                      data-text="edit-input"
                    />
                  </EditInput>
                ) : (
                  <PostMessage data-teste="description">
                    <BodyPostMessageStyled body={obj.headline}/>
                  </PostMessage>
                )}
              </PostText>
              <IconHolder>
                <PencilIcon
                  onClick={() => handleEditClick(obj.id)}
                  data-text="edit-btn"
                />
                <PostDelete
                  id={obj.id}
                  setIsPostDeleted={setIsPostDeleted}
                  isPostDeleted={isPostDeleted}
                />
              </IconHolder>

              <PostMetadata
                title={obj.title}
                url={obj.post_url}
                description={obj.description}
                image={obj.image}
              />
            </PostContent>
          </Post>
        ))
      )}
    </Main>
  );
}

const Main = styled.div`
  gap: 15px;

  p {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-align: center;

    color: #ffffff;
  }
`;

const Post = styled.div`
  display: flex;
  border-radius: 16px;
  background-color: #171717;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 16px;
  position: relative;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OpPfp = styled.img`
  display: flex;
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
`;
const PostMessage = styled.div`
  display: flex;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;
  margin-top: 8px;
  word-break: break-all;
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
`;

const IconHolder = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  top: 20px;
  color: white;
  gap: 10px;
`;

const EditInput = styled.form`
  width: 490px;
  background: #ffffff;
  border-radius: 7px;
  border: none;
  margin: 15px 0px;

  input {
    width: 100%;
    padding: 10px;
    margin: 0;
    border: none;
    border-radius: 7px;
  }
`;

const PencilIcon = styled(IoPencil)`
  color: white;
  cursor: pointer;
`;

function BodyPostMessageStyled({ body } ) {
  const navigate = useNavigate();

  const tagStyle = {
    color: "white",
    fontWeight: 500,
    cursor: "pointer",
  };

  function handleClick(tag) {
    const tagName = tag.substring(1);
    
    navigate(`/hashtag/${tagName}`);
    
  }

  return (
    <ReactTagify tagStyle={tagStyle} tagClicked={(tag) => handleClick(tag)}>
      <p>{typeof body === "string" ? body : JSON.stringify(body)}</p>
    </ReactTagify>
  );
}
