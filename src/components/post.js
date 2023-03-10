import React from "react";
import styled from "styled-components";
import PostDelete from "./PostEdit/postDelete";
import { useState} from "react";
import { IoPencil } from "react-icons/io5";
import axios from "axios";

const testObj = [
	{
		id: "1",
		user_id: "1",
		username: "Brosuke",
		user_url:
			"https://underbuffed.com/wp-content/uploads/2020/06/Persona-4-Golden-Yosuke-Magician-Thumb.jpg",
		headline: "React",
		hashstags_name: ["React"],
		hashtags_id: [1],
		post_url:
			"https://underbuffed.com/wp-content/uploads/2020/06/Persona-4-Golden-Yosuke-Magician-Thumb.jpg",
		total_likes: "420",
		usuario_logado_like: true,
	},
];

export default function DisplayPost() {
	const token = localStorage.getItem("token");
	const [editingPostId, setEditingPostId] = useState(null);
	const [editedMessage, setEditedMessage] = useState("");

	function handleEditClick(postId) {
		if (postId === editingPostId) {
			setEditingPostId(null);
			setEditedMessage("");
		} else {
			setEditingPostId(postId);
			setEditedMessage(testObj.find(obj => obj.id === postId).headline);
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
		event.preventDefault();
		const data = { headline: editedMessage };
		const header = { headers: { Authorization: `Bearer ${token}` } };
		const updatePromise = axios.patch(
			`${process.env.REACT_APP_API_URL}/posts/${postId}`,
			data,
			header
		);
		updatePromise.then((success) => {
			console.log(success);
		});
		updatePromise.catch((error) => {
			alert(error);
		});
		setEditingPostId(null);
		setEditedMessage("");
	}

	return (
		<div>
			{testObj.map((obj) => (
				<Post key={obj.id} postId ={obj.id}>
					<LikePfp>
						<OpPfp src={obj.user_url} />
						<ion-icon name="heart-outline" size="small"></ion-icon>
						<Like>{obj.total_likes} LIKES</Like>
					</LikePfp>
					<PostText>
						<OpName>{obj.username}</OpName>
						{editingPostId === obj.id ? (
							<EditInput
								onKeyDown={onKeyPressed}
								onSubmit={(event) =>
									handleEditSubmit(event, obj.id)
								}>
								<input
									type="text"
									value={editedMessage}
									onChange={handleInputChange}
								/>
							</EditInput>
						) : (
							<PostMessage>{obj.headline}</PostMessage>
						)}
					</PostText>
					<IconHolder>
						<PencilIcon onClick={() => handleEditClick(obj.id)} />
						<PostDelete id={obj.id} />
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
	padding: 10px 0px 10px 10px;
	margin: 15px 0px;
`;

const PencilIcon = styled(IoPencil)`
	color: white;
	cursor: pointer;
`;
