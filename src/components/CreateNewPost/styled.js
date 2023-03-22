import styled from "styled-components";

export const CreateNewPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 209px;
  margin-bottom: 30px;
  background-color: white;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

export const UserImgBox = styled.div`
  padding: 15px;
  box-sizing: border-box;
  width: 10%;
`;

export const StyledUserImg = styled.img`
  border-radius: 50%;
`;

export const PostBox = styled.div`
  padding: 15px;
  box-sizing: border-box;
  width: 90%;
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
  flex-wrap: wrap;
  justify-content: flex-end;

  gap: 5px;

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
    width: 50%;
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

    cursor: pointer;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  &.inputUrl {
    width: 100%;
    height: 30px;
  }

  &.inputDescription {
    width: 100%;
    height: 66px;
  }
`;
