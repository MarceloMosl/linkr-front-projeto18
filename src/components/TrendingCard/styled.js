import styled from "styled-components";

export const TrendingContainer = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
  height: 100vh;
  width: 25vw;
  height: 406px;
  background: #171717;
  border-radius: 16px;
  margin-top: 152px;
  margin-left: 26px;

  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    margin: 9px 0 12px 16px;
    /* topo | direita | inferior | esquerda */

    color: #ffffff;
  }

  /* @media (min-width:375px) {
    display:none;

  } */
`;

export const DivisorLine = styled.div`
  width: 100%;
  border: 1px solid #484848;
`;
