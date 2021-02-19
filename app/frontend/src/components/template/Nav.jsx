//importando o estilo
import "./Nav.css";

//importando as dependências
import React from "react";
import { Link } from "react-router-dom";

//criando o componente funcional Nav
export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"></i> Início
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i> Usuários
      </Link>
    </nav>
  </aside>
);
