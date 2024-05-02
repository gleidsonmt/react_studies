import { useState } from "react";

export default function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name);
    console.log("Cadastrou o usuario");
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Meu Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" placeholder="Digite o seu nome" />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="submit"
            value="cadastrar"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
