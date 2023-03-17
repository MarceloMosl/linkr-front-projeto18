import { useState } from "react";
import { CreateNewPostContainer, Input, PostBox, StyledForm, StyledPostTitle, StyledUserImg, UserImgBox } from "./styled";
import axios from "axios";


export function CreateNewPost() {
    const [url,setUrl] = useState("")
    const [postDescription,setPostDescription] = useState("")
    const [isLoading,setIsLoading] = useState(false)

    async function addNewPost(event){
        event.preventDefault()
        setIsLoading(true)

    const body = {
        url,
        postDescription
    }

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/newpost`,body)
        setIsLoading(false)
        setUrl("")
        setPostDescription("")
    } catch (error) {
        alert(error.response)
    }

    }

    return(
        <CreateNewPostContainer data-test="publish-box">
            <UserImgBox>
            <StyledUserImg
            src={
                "https://underbuffed.com/wp-content/uploads/2020/06/Persona-4-Golden-Yosuke-Magician-Thumb.jpg"
            }
            />
            </UserImgBox>

            <PostBox>
            <StyledPostTitle>What are you going to share today?</StyledPostTitle>
            <StyledForm onSubmit={addNewPost}>
                <Input
                data-test="link"
                className="inputUrl"
                type="url"
                placeholder="http://..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isLoading}
                required
                />
                <Input
                data-test="description"
                className="inputDescription"
                type="text"
                placeholder="Awesome article about #javascript"
                value={postDescription}
                onChange={(e) => setPostDescription(e.target.value)}
                disabled={isLoading}
                required
                />
                <button type="submit" disabled={isLoading} data-test="publish-btn">
                    Publicar
                </button>    
            </StyledForm>
            </PostBox>
            
        </CreateNewPostContainer>
    )
}