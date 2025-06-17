import './App.css';

import { useState } from 'react';

function FormCadUser() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  console.log(email);

  return (
    <form>
      <label htmlFor="nome">Seu nome:</label>
      <input
        type="text"
        id="nome"
        onChange={(event) => {
          const novo_nome = event.target.value;
          setNome(novo_nome);
        }}
      />
      <br />
      <label htmlFor="email">Seu e-mail:</label>
      <input
        type="email"
        id="email"
        onChange={(event) => {
          const novo_email = event.target.value;
          setEmail(novo_email);
        }}
      />
    </form>
  );
}

export default FormCadUser;
