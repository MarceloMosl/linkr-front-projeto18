import { IoTrashOutline } from "react-icons/io5";
import { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";


function PostDelete(id) {
	const token = localStorage.getItem('token');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const iconRef = useRef(null);

	const handleIconClick = () => {
		setIsModalOpen(true);
	};

    const handleDeleteClick = () => {
        const header = { headers: { Authorization: `Bearer ${token}` } };
        const deletePrommise = axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`, header);
        deletePrommise.then(success => {
                    console.log(success)
                });
                deletePrommise.catch(error => {
                    alert(error.message)
                    console.log(error)
                    setIsModalOpen(!isModalOpen)
                });
    };

	return (
		<div>
			<IoTrashOutline ref={iconRef} onClick={handleIconClick} />
			{isModalOpen && (
				<ModalContainer
					role="dialog"
					aria-modal="true"
					aria-labelledby="delete-post-dialog"
					onClick={(event) => {
						if (event.target === event.currentTarget) {
							setIsModalOpen(false);
						}
					}}>
					<ModalContent>
						<ModalMessage>
							Are you sure you want to delete this post?
						</ModalMessage>
						<ButtonContainer>
							<CancelButton onClick={() => setIsModalOpen(false)}>
								No, go back
							</CancelButton>
							<DeleteButton onClick={handleDeleteClick}>
                                Yes, delete it
                            </DeleteButton>
						</ButtonContainer>
					</ModalContent>
				</ModalContainer>
			)}
		</div>
	);
}

export default PostDelete;

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	background-color: rgb(51, 51, 51);
	padding: 20px;
	border-radius: 8px;
	max-width: 80%;
	width: 597px;
	height: 262px;

	@media only screen and (max-width: 768px) {
		max-width: 90%;
		height: auto;
	}
`;

const ModalMessage = styled.p`
	color: white;
	width: 100%;
	margin-bottom: 20px;
	font-size: 40px;
	line-height: 1.5;
	text-align: center;
`;

const CancelButton = styled.button`
	background-color: white;
	color: #1877f2;
	width: 134px;
	height: 37px;
`;

const DeleteButton = styled.button`
	background-color: #1877f2;
	color: white;
	width: 134px;
	height: 37px;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	margin-top: 20px;
`;
