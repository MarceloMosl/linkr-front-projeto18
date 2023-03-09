import React from "react";
import axios from "axios";
import styled from "styled-components";


export default function DisplayPost(){
    
    return (
        <Post>
            <LikePfp>
                <OpPfp src={"https://underbuffed.com/wp-content/uploads/2020/06/Persona-4-Golden-Yosuke-Magician-Thumb.jpg"}/>
                <ion-icon name="heart-outline" size="small"></ion-icon>
                <Like>X LIKES</Like>
            </LikePfp>
            <PostText>
                <OpName>Yosuke Hanamura</OpName>
                <PostMessage> Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</PostMessage>
            </PostText>
        </Post>    
    );
};

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
margin-top: 16px;
`
const OpPfp = styled.img`
display: flex;
width: 50px;
height: 50px;
border-radius: 26.5px;
margin-bottom: 19px;
`

const OpName = styled.div`
display: flex;
color: #FFFFFF;
font-size: 19px;
line-height: 23px;
`
const PostText = styled.div`
display: flex;
margin-left: 17px;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
box-sizing: border-box;
padding-top: 2px;
`
const PostMessage = styled.div`
display: flex;
font-size: 17px;
line-height: 20px;
color: #B7B7B7;
margin-top: 8px;
`
const Like = styled.p`
margin-top: 4px;

`
const LikePfp = styled.div`
display: flex;
flex-direction: column;
font-size: 11px;
align-items: center;
color: #ffffff;
`