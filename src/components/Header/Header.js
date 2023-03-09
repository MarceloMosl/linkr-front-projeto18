import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";
import { useState } from "react";
import { BsChevronDown } from 'react-icons/bs';
import BotaoLogout from "./BotaoLogout.js";





export default function Header () {
    const { imgUser } = useContext(UserContext);
    const {headerStatus}= useContext(UserContext);
    const [temBotao, setTemBotao]= useState (false);
    const {logado, setLogado}= useContext(UserContext);

    if (headerStatus===false) {

    return (
        <>
        <Container>
            <Link to="/" style={{textDecoration:'none'}}>            
                <p>linkr</p>
            </Link>
            <div onClick={()=> setTemBotao(!temBotao)}>
            <BsChevronDown />
            <img alt="userIcon" src={imgUser} /> 
            </div>      
            </Container>        
         {temBotao ? <BotaoLogout logado={logado} setLogado={setLogado}/> : ""}; 
    </>       
    )
    
    }
    
}



const Container = styled.div`
    width: 100%;
    height: 72px;
    background-color: #151515;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left:calc(100vw/2 - width/2) ;
    z-index: 1;

    p{
        width:108px;
        height:54px;
        color:#FFFFFF;
        font-family: 'Passion One';
        font-weight: 700;
        font-style: normal;
        margin-left: 45%;
        font-size:49px;
    
    }
    img{
        border-radius: 100%;
        width: 53px;
        height: 53px;
        margin-right: 3%;
        margin-top: 1%;
    }
`;