//importando as dependências
import React from "react";
import Main from "../template/Main";

//criando o componente funcional Home
export default (props) => (
  <Main
    icon="home"
    title="Início"
    subtitle="Segundo Projeto do capítulo de React."
  >
    <div className="display-4">Bem Vindo!</div>
    <hr />
    <p className="mb-0">
      Sistema para exemplificar a construção de um cadastro desenvolvido em
      React!
    </p>
  </Main>
);
