import './Login.css'
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação, como enviar os dados para um servidor
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };
  return (
    <div className='form-container'>
      <h2>NailStyle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className='form-label'></label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange} className='form-input'
            placeholder='Email ou Telefone'
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange} placeholder='Senha'
          />
        </div>
        <button type="submit" className='form-button'>Entrar</button>
      </form>
      <div className="forgot-password">
        Esqueceu seus dados de login? <strong className='str'>Obtenha ajuda para entrar</strong>
      </div>
      <button className="signup-button">Cadastrar</button>
    </div>
    
  );
};

export default Login;