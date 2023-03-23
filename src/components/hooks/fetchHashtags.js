import { useState, useEffect } from "react";
import axios from "axios";

const useFetchHashtag = (
	token,
	isResponseEdited,
	isPostDeleted,
	isPostCreated
) => {
	const [hashtagContent, setHashtagContent] = useState([]);

	useEffect(() => {
		const URL = `${process.env.REACT_APP_API_URL}/hashtags`;
		const header = { headers: { Authorization: `Bearer ${token}` } };
		const getRegistry = axios.get(URL, header);
		getRegistry.then((response) => {
			setHashtagContent(response.data);
		});
		getRegistry.catch((error) => {
			console.log(error);
		});
	}, [token, isResponseEdited, isPostDeleted, isPostCreated]);

	return hashtagContent;
};

export default useFetchHashtag;
