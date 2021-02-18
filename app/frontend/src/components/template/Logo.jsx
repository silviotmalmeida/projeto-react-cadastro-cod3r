//importando o estilo
import "./Logo.css";

//importando as dependências
import logo from "../../assets/imgs/logo.png";
import React from "react";
import { Link } from "react-router-dom";

//criando o componente funcional Logo
export default (props) => (
  <aside className="logo">
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
    </Link>
  </aside>
);
