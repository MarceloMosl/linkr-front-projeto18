import { HashTagsContainer,StyledLink } from "./styled"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { HashTags } from "./styled"

export default function HashTagsList(){

    const [hashTags,setHashTags] = useState([])
    const navigate = useNavigate

    useEffect(getHashTagsList(),[])

    async function getHashTagsList(){
        
        try {
            const data = await axios.get(`${process.env.REACT_APP_API_URL}/`)

            setHashTags(data)
        } catch (error) {
            alert(error.response);

        }

        function handleHashTagClick(){
            navigate("/hashtag/:")
        }
    }

    return(
        <HashTagsContainer>
            {hashTags.map( h => (
                <HashTags onClick={() => handleHashTagClick()}>
                    <span># {}</span>
                </HashTags>
            ))}
        </HashTagsContainer>
    )
}