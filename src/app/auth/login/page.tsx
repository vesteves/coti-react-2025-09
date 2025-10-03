'use client';

import { useState } from 'react';

const LoginPage = () => {
  // destructuring
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitFunction = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {/* (e: React.ChangeEvent<HTMLFormElement>) => onSubmit(e) */}
      {/* onSubmit */}
      <form onSubmit={onSubmitFunction}>
        <div>
          <label>E-mail</label>
          <input
            type="email"
            className="ml-6 border rounded"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Escreva seu e-email"
          />
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            className="ml-6 border rounded"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>

        <button
          type="submit"
          className="bg-gray-200 hover:bg-gray-400 px-6 py-2 rounded-xl mt-10"
        >
          Ok
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
