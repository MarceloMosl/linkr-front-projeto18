import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import {ThreeDots} from "react-loader-spinner"

export function Login() {
  const navigate = useNavigate();

  const { setHeaderStatus } = useContext(UserContext);
  setHeaderStatus(false);

  const [logar, setLogar] = useState({ email: "", password: "" });

  const { email, password } = logar;
  const [isLoading, setIsLoading] = useState(false);

  function log(event) {
    event.preventDefault();
    setIsLoading(true);

    if (email === "" || password === "") {
      return alert("Por favor, preencha todos os dados!");
    }

    const promise = axios.post(`${process.env.REACT_APP_API_URL}/`, logar);
    promise.then((res) => {
      setIsLoading(false);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_url", res.data.user_url);
      alert("Usuário logado com sucesso!");
      navigate("/timeline");
    });

    promise.catch((err) => {
      console.log(err.response.data);
      alert("Ops! Tente novamente!");
      setIsLoading(false);
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
        <form onSubmit={log}>
          <input
            type="email"
            placeholder="e-mail"
            value={logar.email}
            onChange={(event) =>
              setLogar({ ...logar, email: event.target.value })
            }
            required
            data-test="email"
            disabled={isLoading}
          />

          <input
            type="password"
            placeholder="password"
            value={logar.password}
            onChange={(event) =>
              setLogar({ ...logar, password: event.target.value })
            }
            required
            data-test="password"
            disabled={isLoading}
          />

          <button type="submit" data-test="login-btn" disabled={isLoading}>
            {isLoading ? (
            <ThreeDots width={50} color="#FFFFFF"/>
           ) : "Log In"}
            
          </button>
          <p data-test="sign-up-link" onClick={() => navigate("/sign-up")}>
            First time? Create an account!
          </p>
        </form>
      </Inputs>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  background-color: #151515;
  font-family: "Passion One";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
  div {
    margin: 220px 0 0 110px;
  }
  h1 {
    font-size: 106px;
    line-height: 117px;
    width: 233px;
  }
  h2 {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    width: 442px;
  }
  @media (max-width: 950px) {
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px 0 0 0;
    }
    h1 {
      font-size: 76px;
      line-height: 75px;
      width: 40%;
    }
    h2 {
      text-align: center;
      font-size: 23px;
      line-height: 30px;
      width: 80%;
    }
  }
`;

const Inputs = styled.div`
  @media (max-width: 950px) {
    height: 100vh;
    width: 100vw;
    form {
      margin: auto;
      width: 100vw;
      input {
        width: 90%;
      }
      button {
        width: 90%;
      }
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Oswald";
  font-weight: 700;
  gap: 0px;
  width: 50vw;
  background-color: #333333;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 10px;
  }
  input {
    width: 30vw;
    height: 80px;
    border-radius: 6px;
    font-family: "Oswald";
    font-size: 27px;
    color: #9f9f9f;
    padding: 18px;
    border-radius: 6px;
    border: none;
    box-sizing: border-box;
  }
  button {
    width: 30vw;
    height: 65px;
    background: #1877f2;
    border-radius: 6px;
    font-family: "Oswald";
    font-weight: 700;
    font-size: 27px;
    color: #ffffff;
    border-color: transparent;
    cursor: pointer;
    border-radius: 6px;
    border: none;
  }
  button:disabled {
    background: grey;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-decoration-line: underline;
    color: #ffffff;
    cursor: pointer;
  }
`;
