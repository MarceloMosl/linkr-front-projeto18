import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";



export function SignUp () {
    const navigate = useNavigate();
    const URL = "http://localhost:5000/"
    const [desabilitado, setDesabilitado] = useState(false);
    const { setImgUser } = useContext(UserContext);


    const [cadastrar, setCadastrar] = useState(
        {email:'', 
        password:'', 
        username:'', 
        user_url:''});

        const { email, password, username, user_url } = cadastrar;

        function registrar(event) {
            event.preventDefault();
            
            if (email === "" || password === "" || username === "" || user_url === "") {
                return alert("Por favor, preencha todos os dados!");
              }

              setDesabilitado (true)
        
            const promise = axios.post(`${URL}sign-up`, cadastrar);
            promise.then((res) => {
                setImgUser(user_url)
                alert("Usuário cadastrado com sucesso!")
                navigate("/");
            });
    
            promise.catch((err) => {
                console.log(err.response.data);
                alert('Ops! Tente novamente!');
                setDesabilitado(false);
            });
        }
    return (
        <Container>

            <Title>
                <div>
                    <h1>linkr</h1>
                    <h2>save, share and discover the best links on the web</h2>
                </div>
            </Title>

            <Inputs>
                <form onSubmit={registrar}>

            
                <input 
                type="email" 
                placeholder="e-mail" 
                value={cadastrar.email} 
                onChange={(event) => setCadastrar({...cadastrar, email:event.target.value})} 
                required
                data-test="email"


                />

<input 
                type="password" 
                placeholder="password" 
                value={cadastrar.password} 
                onChange={(event) => setCadastrar({...cadastrar, password:event.target.value})} 
                required
                data-test="password"


                />

                <input
                type="text"
                placeholder="username"
                value={cadastrar.username}
                onChange={(event) => setCadastrar({ ...cadastrar, username: event.target.value })}
                required
                data-test="username"

                />

                <input
                type="url"
                placeholder="picture url"
                value={cadastrar.user_url}
                onChange={(event) => setCadastrar({ ...cadastrar, user_url: event.target.value })}
                required
                data-test="picture-url"

                />


                <button
                type="submit" disabled={desabilitado}
                data-test="sign-up-btn">
                Sign Up</button>
                </form>
                <p data-test="login-link" onClick={() => navigate("/")} >
                Switch back to log in
                </p>

            </Inputs>


        </Container>
    )

}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 900px;
  @media (max-width: 375px) {
    flex-direction: column;
    height:667px;
  }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 75vw;
    height: 900px;
    background-color: #151515;
    font-family: 'Passion One';
    font-style: normal;
    font-weight: 700;
    color: #FFFFFF;
    div{
        margin: 220px 0 0 110px;
    }
    h1{
        font-size: 106px;
        line-height: 117px;
        width: 233px;
    }
    h2{
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
        width: 442px;
    }
    @media (max-width: 375px) {
        width: 100%;
        height: 25%;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 10px 0 0 0;
        }
        h1{
            font-size: 76px;
            line-height: 75px;
            width: 40%;
        }
        h2{
            text-align: center;
            font-size: 23px;
            line-height: 30px;
            width: 80%;
        }
        }`

const Inputs= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Oswald';
    font-weight: 700;
    width: 50vw;
    background-color: #333333;
    form {
        display: flex;
        flex-direction: column;
        margin: 170px 0 0 0;
    }
    input {
        width: 429px;
        height: 50px;
        left: 956px;
        top: 317px;
        background: #FFFFFF;
        border-radius: 6px;
        font-family: 'Oswald';
        font-style: normal;
        font-size: 27px;
        line-height: 40.01px;
        color: #9F9F9F;
        margin-bottom: 12px;
        padding:18px;
        
    }
    button {
        width: 465px;
        height: 65px;
        background: #1877F2;
        border-radius: 6px;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
        color: #FFFFFF;
        margin-bottom: 22px;
        border-color: transparent;
        cursor: pointer;
    }
    button:disabled {
            width: 80%;
            height: 65px;
            background:grey;
            opacity: 0.5;
        }
    p {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-decoration-line: underline;
        color: #FFFFFF;
        cursor: pointer;

    }
   `