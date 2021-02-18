//importando o estilo
import "./Footer.css";

//importando as dependências
import React from "react";

//criando o componente funcional Footer
export default (props) => (
  <footer className="footer">
    <span>
      Desenvolvido com <i className="fa fa-heart text-danger"></i> por
      <strong>
        {" "}
        Cod<span className="text-danger">3</span>r
      </strong>
    </span>
  </footer>
);
