//arquivo inicial da aplicação

//importando o estilo
import "./index.css";

//importando as dependências
import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import registerServiceWorker from "./registerServiceWorker";

//renderizando a aplicação
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
