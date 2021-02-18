//importando o estilo
import "./Header.css";

//importando as dependências
import React from "react";

//criando o componente funcional Header
export default (props) => (
  <header className="header d-none d-sm-flex flex-column">
    <h1 className="mt-3">
      <i className={`fa fa-${props.icon}`}></i> {props.title}
    </h1>
    <p className="lead text-muted">{props.subtitle}</p>
  </header>
);
