import { CreateNewPostContainer, StyledPostTitle, StyledUserImg } from "./styled";


export function CreateNewPost() {
    return(
        <CreateNewPostContainer>
            <StyledUserImg
            src={
                "https://underbuffed.com/wp-content/uploads/2020/06/Persona-4-Golden-Yosuke-Magician-Thumb.jpg"
            }
            />
            <StyledPostTitle>What are you going to share today?</StyledPostTitle>
                
            
        </CreateNewPostContainer>
    )
}