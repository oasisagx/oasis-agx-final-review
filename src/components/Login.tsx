import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'oasismed' && password === 'unicornio') {
      window.location.href = 'https://dashboard-oasis-v2.netlify.app/';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="relative z-10 max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8">
          <img 
            src="/images/logos/oasis-logo.svg" 
            alt="Oasis AGX" 
            className="h-16 w-auto mx-auto"
          />
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-strong border border-gray-200/80">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Acesse sua conta</h2>
          <p className="text-center text-gray-500 mb-8">Bem-vindo de volta!</p>
          
          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">Usuário</label>
              <input
                type="text"
                placeholder="seu usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-oasis-blue/50 transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">Senha</label>
              <input
                type="password"
                placeholder="sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-oasis-blue/50 transition-all"
              />
            </div>
            
            {error && <p className="text-red-500 text-sm text-center pt-2">{error}</p>}

            <button
              onClick={handleLogin}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-oasis-blue hover:bg-oasis-blue-dark text-white font-semibold rounded-lg transition-all duration-300 font-body text-base shadow-medium hover:shadow-strong transform hover:-translate-y-0.5"
            >
              Entrar
            </button>
          </div>
        </div>
        <p className="text-center text-gray-400 text-xs mt-8">
          &copy; 2025 Oasis AGX. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
};

export default Login;
