import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BotaoLogout () {
    const navigate = useNavigate();

function logOut() {
    localStorage.removeItem("token"); 
    localStorage.removeItem("user_url"); 
    navigate("/");
}

return (
    <Container data-test = "menu">
        <btn onClick={logOut}  data-test = "logout">
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