import styled from "styled-components";

export const CreateNewPostContainer = styled.div`
  display: flex;
  width: 611px;
  height: 209px;
  margin-top: 43px;
  margin-bottom: 29px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  padding-left: 18px;
  padding-top: 17px;
  padding-bottom: 20px;
  padding-right: 21px;
`;

export const UserImgBox = styled.div`
`;

export const StyledUserImg = styled.img`
  /* display: flex; */
  width: 50px;
  height: 50px;
  border-radius: 26.5px;
  
`;
export const PostBox = styled.div`
margin-left:18px;
margin-top:10px;

`;
export const StyledPostTitle = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 10px;

  color: #707070;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap:5px;
  position: absolute;

  input {
  
    background: #efefef;
    border-radius: 5px;
    border: none;

    ::placeholder {
      font-family: "Lato";
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 18px;
      color: #949494;
    }
    
  }

  button {
    width: 112px;
    height: 31px;

    background: #1877f2;
    border-radius: 5px;
    border: none;

    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    color: #ffffff;
    position:relative;
    left: 394px;
    cursor:pointer;
  }
`;

export const Input = styled.input`
  &.inputUrl {
    width: 503px;
    height: 30px;
  }
  
  &.inputDescription {
    width: 503px;
    height: 66px;
  }
  `
;
