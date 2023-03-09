import styled from "styled-components";

export function SearchUser({ userPosts, user }) {
  return (
    <All>
      <section>
        <img src={user.user_url} />
        <span>{user.username}'s posts</span>
      </section>

      {userPosts.length === 0
        ? ""
        : userPosts.map((a) => (
            <Post>
              <LikePfp>
                <OpPfp src={user.user_url} />
                <ion-icon name="heart-outline" size="small"></ion-icon>
                <Like>X LIKES</Like>
              </LikePfp>
              <PostText>
                <OpName>{user.username}</OpName>
                <PostMessage>{a.headline}</PostMessage>
              </PostText>
            </Post>
          ))}
    </All>
  );
}

const All = styled.div`
  background-color: #4d4d4d;
  min-height: 100vh;

  section {
    display: flex;
    width: 611px;
    margin: auto;
    font-weight: 700;
    font-size: 43px;
    color: white;
    padding-top: 150px;
    margin-bottom: 41px;
    align-items: center;
    gap: 5px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;

const Post = styled.div`
  display: flex;
  background-color: #171717;
  border-radius: 16px;
  width: 611px;
  height: 276px;
  padding-left: 18px;
  padding-top: 17px;
  padding-bottom: 20px;
  padding-right: 21px;
  box-sizing: border-box;
  margin: auto;
  position: relative;
`;
const OpPfp = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 26.5px;
  margin-bottom: 19px;
`;

const OpName = styled.div`
  display: flex;
  color: #ffffff;
  font-size: 19px;
  line-height: 23px;
`;
const PostText = styled.div`
  display: flex;
  margin-left: 17px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding-top: 2px;
`;
const PostMessage = styled.div`
  display: flex;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;
  margin-top: 8px;
`;
const Like = styled.p`
  margin-top: 4px;
`;
const LikePfp = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  align-items: center;
  color: #ffffff;
`;
