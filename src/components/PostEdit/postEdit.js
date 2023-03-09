import { IoPencil } from "react-icons/io5";
import { useRef } from "react";

function PostEdit({
	isEditing,
	setIsEditing,
	handleEditCancel,
}) {
	function handleEditClick() {
		if (isEditing) {
			setIsEditing(false);
			handleEditCancel();
		} else {
			setIsEditing(true);
		}
	}

	return (
		<div>
			<IoPencil onClick={handleEditClick} />
		</div>
	);
}

export default PostEdit;
