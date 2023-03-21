import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchTimeline = (token, isResponseEdited, isPostDeleted, isPostCreated) => {
  const [timelineContent, setTimelineContent] = useState([]);

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
  }, [token, isResponseEdited, isPostDeleted, isPostCreated]);

  return timelineContent;
};

export default useFetchTimeline;
