'use client';

// import { useState } from 'react';

const LoginPage = () => {
  let email = '';

  const setEmail = (value: string) => {
    email = value;
  };

  // const [email, setEmail] = useState('');

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`email: ${email}`);
        }}
      >
        <div>
          <label>E-mail</label>
          <input
            type="email"
            className="ml-6 border rounded"
            onInput={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Senha</label>
          <input type="password" className="ml-6 border rounded" />
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
