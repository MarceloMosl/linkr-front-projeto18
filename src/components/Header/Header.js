import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import BotaoLogout from "./BotaoLogout.js";
import axios from "axios";
import React from "react";

export default function Header() {
  const { imgUser } = useContext(UserContext);
  const { headerStatus } = useContext(UserContext);
  const [temBotao, setTemBotao] = useState(false);
  const { logado, setLogado } = useContext(UserContext);

  const [searchBar, setsearchBar] = React.useState("");

  if (searchBar.length >= 3) {
    const promise = axios.post("http://localhost:5000/srcuser", {
      username: `%${searchBar}%`,
    });

    promise.then((res) => console.log(res));
  }

  if (headerStatus === false) {
    return (
      <>
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>linkr</p>
          </Link>
          <input
            type={"text"}
            placeholder="Search for people"
            onChange={(e) => setsearchBar(e.target.value)}
          ></input>
          <div onClick={() => setTemBotao(!temBotao)}>
            <BsChevronDown />
            <img alt="userIcon" src={imgUser} />
          </div>
        </Container>
        {temBotao ? <BotaoLogout logado={logado} setLogado={setLogado} /> : ""};
      </>
    );
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
  left: calc(100vw / 2 - width/2);
  z-index: 1;
  input {
    height: 45px;
    border: none;
    background-color: white;
    width: 30vw;
    border-radius: 5px;
    text-align: center;
  }

  p {
    width: 108px;
    height: 54px;
    color: #ffffff;
    font-family: "Passion One";
    font-weight: 700;
    font-style: normal;
    margin-left: 45%;
    font-size: 49px;
  }
  img {
    border-radius: 100%;
    width: 53px;
    height: 53px;
    margin-right: 3%;
    margin-top: 1%;
  }
`;
