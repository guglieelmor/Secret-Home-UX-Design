import React, { useState } from 'react';
import api  from '../../services/api';
import logo from '../../assets/img/logoRadiusBlack.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    async function handleSubmit(params) {
      params.preventDefault();
      
      const response = await api.post('/sessions', {
          email: email,
          password: password  
        });
  
      const { _id } = response.data;
      localStorage.setItem('user', _id);
    }
    
    return (
        <>
        <img src={logo} alt="Secret Home"/>
        <div className="title">Secret Home</div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">e-mail</label>
            <input 
                type="email"
                id="email"
                placeholder="contato@secrethome.com.br"
                value={email}
                onChange={params => setEmail(params.target.value)}
            />
            <label htmlFor="Senha">senha</label>
            <input 
                type="password"
                id="password"
                placeholder="*****"
                value={password}
                onChange={params => setPassword(params.target.value)}
            />
            <button className="btn" type="submit">entrar</button>
        </form>
        </>
        
    )
}