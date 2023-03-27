import styled from "styled-components";

export const HashTagContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #4d4d4d;
  min-height: 100vh;

  /* align-items: center; */
`;

export const HashTagBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: auto;

  @media (max-width: 950px) {
    width: 100vw;
  }
`;

export const HashTagHeaderContainer = styled.div`
 margin-top: 40px;
  margin-bottom: 20px;
  padding: 15px;
  box-sizing: border-box;
  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #ffffff;
  }
`

export const PostArea = styled.div`
  @media (max-width: 950px) {
    margin: auto;
  }
  @media (max-width: 750px) {
    margin: auto;
    width: 100vw;
  }
  
  width: 70%;
`;

