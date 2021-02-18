//importando o estilo
import "./Main.css";

//importando as dependências
import React from "react";
import Header from "./Header";

//criando o componente funcional Main
export default (props) => (
  <React.Fragment>
    <Header {...props} />
    <main className="content container-fluid">
      <div className="p-3 mt-3">{props.children}</div>
    </main>
  </React.Fragment>
);
