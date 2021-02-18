//importando as dependências
import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

//criando o componente funcional Routes
export default (props) => (
  <Switch>
    {/* Definindo as rotas: */}
    {/* para a url '/', chama o componente Home */}
    <Route exact path="/" component={Home} />

    {/* para a url '/users', chama o componente UserCrud */}
    <Route path="/users" component={UserCrud} />

    {/* para as demais urls, redireciona para o componente Home */}
    <Redirect from="*" to="/" />
  </Switch>
);
