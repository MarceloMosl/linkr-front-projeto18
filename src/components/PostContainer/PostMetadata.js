import styled from "styled-components";

export default function PostMetadata({ image, url, title, description }) {
  return (
    <LinkContainer href={url} target="_blank" data-test="link">
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <h3>{url}</h3>
      </div>
      <ImageLink src={image} />
    </LinkContainer>
  );
}

export const LinkContainer = styled.a`
  display: flex;
  margin-left: 10px;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  text-decoration: none;
  h1,
  h2,
  h3 {
    width: 65%;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    margin-left: 10px;
  }
  h1 {
    font-size: 16px;
    line-height: 19px;
    color: #cecece;
    margin-top: 24px;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 11px;
    line-height: 13px;
    color: #9b9595;
    margin-bottom: 13px;
  }
  h3 {
    font-size: 11px;
    line-height: 13px;
    color: #cecece;
  }
`;

const ImageLink = styled.img`
  width: 155px;
  height: 155px;
  border-radius: 0px 11px 11px 0px;
`;
