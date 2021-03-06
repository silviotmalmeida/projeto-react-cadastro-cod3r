//importando as dependências
import React, { Component } from "react";
import axios from "axios";
import Main from "../template/Main";

//definindo os atributos a serem passados para o Header
const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!",
};

//definindo a url do webservice de usuários
const baseUrl = "http://localhost:3001/users";

//definindo o estado inicial dos atributos do componente
const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class UserCrud extends Component {
  //classe responsável por criar o componente calculator

  //carregando o estado inicial
  state = { ...initialState };

  componentWillMount() {
    //função que é executada antes da criação do componente

    //realizando uma chamada ajax ao webservice
    axios(baseUrl).then((resp) => {
      //populando o atributo list com o array de usuários
      this.setState({ list: resp.data });
    });
  }

  clear() {
    //função para retornar o atributo user ao estado inicial
    this.setState({ user: initialState.user });
  }

  save() {
    //função responsável pela inclusão ou atualização de um registro no banco

    //obtendo os dados do usuário
    const user = this.state.user;

    //se o atributo user.id estiver definido, trata-se de uma atualização,
    //senão trata-se de uma inclusão
    const method = user.id ? "put" : "post";

    //se o atributo user.id estiver definido, a url será construída com o id,
    //senão será utilizada a url raiz
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

    //realizando uma chamada ajax ao webservice
    axios[method](url, user).then((resp) => {
      //obtendo a lista de usuários atualizada
      const list = this.getUpdatedList(resp.data);

      //atualizando o estado do atributo list e
      //retornando para o estado inicial do atributo user
      this.setState({ user: initialState.user, list });
    });
  }

  getUpdatedList(user, add = true) {
    //função auxiliar que retorna uma lista atualizada dos usuários
    //sem a necessidade de realizar nova requisição ajax GET

    //criando uma nova lista a partir do estado atual do atributo list
    //e removendo o registro do usuário recebido por parâmetro
    const list = this.state.list.filter((u) => u.id !== user.id);

    //caso seja uma inclusão ou edição,
    //inclui o usuário recebido por parâmetro no início do atributo list
    //caso seja uma exclusão o atributo add deverá ser false
    if (add) list.unshift(user);

    //retorna a lista atualizada
    return list;
  }

  updateField(event) {
    //função responsável por atualizar o estado dos atributos
    //user.name e user.email a partir de um evento

    //obtendo o estado atual do atributo user
    const user = { ...this.state.user };

    //obtendo o valor do atributo name do elemento que gerou o evento
    //este valor deve coincidir com o atributo desejado do componente
    const actionTagName = event.target.name;

    //obtendo o valor do atributo value do elemento que gerou o evento
    const actionTagValue = event.target.value;

    //alterando o estado atual do atributo user referente ao name selecionado
    user[actionTagName] = actionTagValue;

    //atualizando estado do atributo user
    this.setState({ user });
  }

  renderForm() {
    //função responsável por renderizar o formulário

    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                //recebe o estado atual do atributo user.name
                value={this.state.user.name}
                //ao ser editado, altera o estado do atributo user.name
                onChange={(e) => this.updateField(e)}
                placeholder="Digite o nome..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                //recebe o estado atual do atributo user.email
                value={this.state.user.email}
                //ao ser editado, altera o estado do atributo user.email
                onChange={(e) => this.updateField(e)}
                placeholder="Digite o e-mail..."
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button
              className="btn btn-primary"
              // ao clicar no botão Salvar, chama a função save
              onClick={(e) => this.save(e)}
            >
              Salvar
            </button>

            <button
              className="btn btn-secondary ml-2"
              // ao clicar no botão Cancelar, chama a função clear
              onClick={(e) => this.clear(e)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  load(user) {
    //função para atualizar o estado atual do atributo user
    //com os valores passados por parâmetro
    this.setState({ user });
  }

  remove(user) {
    //função responsável pela exclusão de um registro no banco

    //passando a url com o id do usuário a ser excluído
    axios.delete(`${baseUrl}/${user.id}`).then((resp) => {
      //atualizando a lista de usuários
      const list = this.getUpdatedList(user, false);

      //atualizando estado do atributo list
      this.setState({ list });
    });
  }

  renderTable() {
    //função responsável por renderizar a tabela de usuários

    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        {/* renderizando as linhas da tabela */}
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    //função responsável por renderizar as linhas da tabela de usuários

    //para cada item da lista user:
    return this.state.list.map((user) => {
      return (
        // preenchendo os dados
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            {/* criando o botão de editar */}
            <button
              className="btn btn-warning"
              // ao clicar no botão editar, chama a função load
              onClick={() => this.load(user)}
            >
              <i className="fa fa-pencil"></i>
            </button>

            {/* criando o botão de excluir */}
            <button
              className="btn btn-danger ml-2"
              // ao clicar no botão excluir, chama a função remove
              onClick={() => this.remove(user)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    //função responsável pela criação do componente

    return (
      <Main {...headerProps}>
        {/* renderizando o formulário */}
        {this.renderForm()}

        {/* renderizando a tabela */}
        {this.renderTable()}
      </Main>
    );
  }
}
