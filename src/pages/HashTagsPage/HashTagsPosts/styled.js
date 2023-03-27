import styled from "styled-components";


export const PostContainer = styled.div`
 gap: 15px;

p {
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;

  color: #ffffff;
}
`
export const Post = styled.div`
  display: flex;
  border-radius: 16px;
  background-color: #171717;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 16px;
  position: relative;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledUserImg = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 26.5px;
  margin-bottom: 19px;
`;

export const StyledUserName = styled.div`
  display: flex;
  color: #ffffff;
  font-size: 19px;
  line-height: 23px;
`;
export const PostText = styled.div`
  display: flex;
  margin-left: 17px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding-top: 2px;
`;
export const PostMessage = styled.div`
  display: flex;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;
  margin-top: 8px;
  word-break: break-all;
`;

export const StyledLikeText = styled.p`
  margin-top: 4px;
`;

export const StyledLikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  align-items: center;
  color: #ffffff;
`;