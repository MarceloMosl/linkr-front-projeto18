import React from "react";
import axios from "axios";
import styled from "styled-components";
import DisplayPost from "../../components/post.js";


/*
const url = 'https://www.google.com';
const urlMetadata = require('url-metadata');
urlMetadata(url).then(metadata => {
    console.log(metadata)
}
)
*/

const PostArea = styled.div`
display: flex;
width: 100%;
height: 900px;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: #4D4D4D;
box-sizing: border-box;
`
export function Timeline(){
    
    return (
    <PostArea>
        <DisplayPost>
        </DisplayPost>
    </PostArea>
    );
};

