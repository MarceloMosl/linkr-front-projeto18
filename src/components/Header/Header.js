import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext.js";
import { useState } from "react";
import BotaoLogout from "./BotaoLogout.js";
import axios from "axios";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const { headerStatus } = useContext(UserContext);
  const [temBotao, setTemBotao] = useState(false);
  const [searchBar, setsearchBar] = React.useState("");
  const [userResult, setUserResult] = React.useState([]);
  const navigate = useNavigate();
  const user_url = localStorage.getItem("user_url");
  

  


  useEffect(() => {
    if (searchBar.length >= 3) {
      const promise = axios.post(`${process.env.REACT_APP_API_URL}/srcuser`, {
        username: `%${searchBar}%`,
      });

      promise.then((res) => {
        setUserResult(res.data);
      });
    }
  }, [searchBar]);

  if (headerStatus === true) {
    return (
      <>
        <Container>
          <Link to="/timeline" style={{ textDecoration: "none" }}>
            <p>linkr</p>
          </Link>
          <section>
            <input
              type={"text"}
              data-test="search"
              placeholder="Search for people"
              onChange={(e) => setsearchBar(e.target.value)}
            ></input>
            {searchBar.length !== 0 ? (
              <ul>
                {userResult.map((result) => (
                  <li data-test="user-search">
                    <img
                      onClick={() => navigate(`/user/${result.id}`)}
                      src={result.user_url}
                      alt="foto do usuario"
                    />{" "}
                    <span onClick={() => navigate(`/user/${result.id}`)}>
                      {result.username}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </section>

          
          <div onClick={() => setTemBotao(!temBotao)} style={{ display: "flex", alignItems: "center" }}>
            <FiChevronDown style={{ marginRight: "5px", color:"white", fontSize:"30px" }}/>
            <img alt="icon" src={user_url} style={{ marginRight: "30px" }}  data-test="avatar"/>
          </div>
          
         

        </Container>
        {temBotao ? <BotaoLogout/> : ""};
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
  section {
    input {
      height: 45px;
      border: none;
      background-color: white;
      width: 30vw;
      border-radius: 5px;
      text-align: center;
    }
    ul {
      position: absolute;
      background-color: white;
      margin-top: 5px;
      width: 30vw;
      li {
        display: flex;
        align-items: center;
      }
    }
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
