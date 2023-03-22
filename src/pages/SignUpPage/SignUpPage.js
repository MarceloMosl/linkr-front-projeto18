import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";

export function SignUp() {
  const navigate = useNavigate();
  const [desabilitado, setDesabilitado] = useState(false);
  const { setImgUser } = useContext(UserContext);

  const [cadastrar, setCadastrar] = useState({
    email: "",
    password: "",
    username: "",
    user_url: "",
  });

  const { email, password, username, user_url } = cadastrar;

  function registrar(event) {
    event.preventDefault();

    if (email === "" || password === "" || username === "" || user_url === "") {
      return alert("Por favor, preencha todos os dados!");
    }

    setDesabilitado(true);

    const promise = axios.post(
      `${process.env.REACT_APP_API_URL}/sign-up`,
      cadastrar
    );
    promise.then((res) => {
      setImgUser(user_url);
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    });

    promise.catch((err) => {
      console.log(err.response.data);
      alert("Ops! Tente novamente!");
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
            onChange={(event) =>
              setCadastrar({ ...cadastrar, email: event.target.value })
            }
            required
            data-test="email"
          />

          <input
            type="password"
            placeholder="password"
            value={cadastrar.password}
            onChange={(event) =>
              setCadastrar({ ...cadastrar, password: event.target.value })
            }
            required
            data-test="password"
          />

          <input
            type="text"
            placeholder="username"
            value={cadastrar.username}
            onChange={(event) =>
              setCadastrar({ ...cadastrar, username: event.target.value })
            }
            required
            data-test="username"
          />

          <input
            type="url"
            placeholder="picture url"
            value={cadastrar.user_url}
            onChange={(event) =>
              setCadastrar({ ...cadastrar, user_url: event.target.value })
            }
            required
            data-test="picture-url"
          />

          <button type="submit" disabled={desabilitado} data-test="sign-up-btn">
            Sign Up
          </button>
          <p data-test="login-link" onClick={() => navigate("/")}>
            Switch back to log in
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
    margin: auto;
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
