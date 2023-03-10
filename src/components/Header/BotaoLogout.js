import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";

export default function BotaoLogout () {
    const {setLogado}= useContext(UserContext);
    const navigate = useNavigate();

function logOut() {
    localStorage.removeItem("logado"); 
    setLogado(null);
    navigate("/");
}

return (
    <Container>
        <btn onClick={logOut}>
            Logout
        </btn>
    </Container>
);

}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right:0;
    top:70px;
        btn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 150px;
            height: 47px;
            background-color: #171717;
            border-radius: 0 0 20px 20px;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            color: #FFFFFF;
            cursor: pointer;
        }
`