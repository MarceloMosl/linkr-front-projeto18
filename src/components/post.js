import React from "react";
import styled from "styled-components";
import PostEdit from "./PostEdit/postEdit";
import PostDelete from "./PostEdit/postDelete";
import { useState } from "react";
import EditForm from "./PostEdit/editForm";
import axios from "axios";



export default function DisplayPost() {
	const [isEditing, setIsEditing] = useState(false);
	const [editedMessage, setEditedMessage] = useState(
		"Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material"
	);
	const [originalMessage, setOriginalMessage] = useState(editedMessage);

	function handleEditSubmit(event) {
		event.preventDefault();
		setIsEditing(false);
		setOriginalMessage(editedMessage);
	}

	function handleEditCancel() {
		setEditedMessage(originalMessage);
		setIsEditing(false);
	}

	return (
		<Post>
			<LikePfp>
				<OpPfp
					src={
						"https://underbuffed.com/wp-content/uploads/2020/06/Persona-4-Golden-Yosuke-Magician-Thumb.jpg"
					}
				/>
				<ion-icon name="heart-outline" size="small"></ion-icon>
				<Like>X LIKES</Like>
			</LikePfp>
			<PostText>
				<OpName>Yosuke Hanamura</OpName>
				{isEditing ? (
					<EditForm
						editedMessage={editedMessage}
						setEditedMessage={setEditedMessage}
						handleEditSubmit={handleEditSubmit}
						handleEditCancel={handleEditCancel}
					/>
				) : (
					<PostMessage>{editedMessage}</PostMessage>
				)}
			</PostText>

			<IconHolder>
				<PostEdit
					postId={"postId"}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
					inputValue={editedMessage}
					handleEditSubmit={handleEditSubmit}
					handleEditCancel={handleEditCancel}
				/>
                <PostDelete
                    id = {"id"}
                />

			</IconHolder>
		</Post>
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
	margin-top: 16px;
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
    display:flex;
	position: absolute;
	right: 20px;
	top: 20px;
	color: white;
    gap: 10px;
`;
