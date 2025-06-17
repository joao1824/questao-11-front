João Herique Camilo Fogaça 

Questão:

No trecho de código abaixo temos um formulário muito simples implementado em React, ele possui apenas 2 campos e um controle de estado básico para relacionar o que está sendo digitado/inputado nos campos a ser utilizado depois. Este código fora implementado de forma pura sem nenhuma biblioteca auxiliar, apenas React.js + HOOKs:

import { useState } from "react";

function FormularioCadastro() {
  const [nome] = useState("");
  const [email] = useState("");

  return (
    <form>
      <label htmlFor="nome">Seu nome:</label>
      <input type="text" id="nome" value={nome} onText={event => {
        nome = event.target.value;
      }} />
      <br />
      <label htmlFor="email">Seu e-mail:</label>
      <input type="email" id="email" value={email} onText={event => {
        email = event.target.value;
      }} />
    </form>
  );
}

function App() {
  return (
    <div className="container">
      <h2>Cadastre-se</h2>
      <FormCadUser />
    </div>
  );
}

(clique aqui para visualizar o código em outra janela)

No entanto como é possível perceber o código acima não está funcionando, existem pelo menos 3 erros no mesmo.

Descreva no campo abaixo quais erros você encontrou e qual a possível solução para corrigir os mesmos:

PS.: Caso você sinta a necessidade de re-codar o código como resposta, favor anexar também um link do código completo, por exemplo no GIST ou no StackBlitz já rodando e funcional (correto).
