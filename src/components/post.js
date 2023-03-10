import React from "react";
import styled from "styled-components";
import PostDelete from "./PostEdit/postDelete";
import { useState, useEffect } from "react";
import { IoPencil } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DisplayPost() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");
  const [timelineContent, setTimelineContent] = useState([]);
  const [isResponseEdited, setIsResponseEdited] = useState("");
  const [isPostDeleted, setIsPostDeleted] = useState(false);

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/timeline`;
    const header = { headers: { Authorization: `Bearer ${token}` } };
    const getRegistry = axios.get(URL, header);
    getRegistry.then((response) => {
      setTimelineContent(response.data);
    });
    getRegistry.catch((error) => {
      console.log(error);
    });
  }, [setTimelineContent, isResponseEdited, isPostDeleted]);

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
      console.log(success);
      setIsResponseEdited(success.data);
    });
    updatePromise.catch((error) => {
      alert(error);
    });
    setEditingPostId(null);
    setEditedMessage("");
  }

  return (
    <div>
      {timelineContent.map((obj) => (
        <Post key={obj.id} postId={obj.id}>
          <LikePfp>
            <OpPfp
              onClick={() => navigate(`/user/${obj.id}`)}
              src={obj.user_url}
            />
            <ion-icon name="heart-outline" size="small"></ion-icon>
            <Like>{obj.total_likes} LIKES</Like>
          </LikePfp>
          <PostText>
            <OpName onClick={() => navigate(`/user/${obj.id}`)}>
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
              <PostMessage>{obj.headline}</PostMessage>
            )}
          </PostText>
          <IconHolder>
            <PencilIcon onClick={() => handleEditClick(obj.id)} data-text="edit-btn"/>
            <PostDelete
              id={obj.id}
              setIsPostDeleted={setIsPostDeleted}
              isPostDeleted={isPostDeleted}
              
            />
          </IconHolder>
        </Post>
      ))}
    </div>
  );
}

const Post = styled.div`
  display: flex;
  background-color: #171717;
  border-radius: 16px;
  width: 611px;
  height: 276px;
  padding-left: 18px;
  padding-top: 17px;
  padding-bottom: 20px;
  padding-right: 21px;
  box-sizing: border-box;
  margin-bottom: 16px;
  position: relative;
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
