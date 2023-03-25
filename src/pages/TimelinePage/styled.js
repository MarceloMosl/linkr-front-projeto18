import styled from "styled-components";

export const TimeLineContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #4d4d4d;
  min-height: 100vh;
  margin-top:30px;

  /* align-items: center; */
`;

export const TimeLineBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: auto;

  @media (max-width: 950px) {
    width: 100vw;
  }
`;
