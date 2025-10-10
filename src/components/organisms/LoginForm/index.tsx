'use client';

import Field from '@/components/molecules/Field';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const LoginForm = () => {
  // destructuring
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const { saveUserLocalStorage } = useAuth();

  const onSubmitFunction = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`email: ${email}`);
    console.log(`password: ${password}`);

    if (email !== 'teste@teste.com.br' || password !== 'teste123') {
      alert('Falha ao efetuar o login');
      return;
    }

    saveUserLocalStorage(email);

    alert('Login efetuado com sucesso!');
    router.push('/dashboard');
  };

  return (
    <form onSubmit={onSubmitFunction}>
      <Field
        type="email"
        text="E-mail"
        classNameInput="col-span-3"
        onInput={setEmail}
        placeholder="Escreva seu e-email"
      />

      <Field
        type="password"
        text="Senha"
        classNameInput="col-span-3"
        onInput={setPassword}
      />

      <button
        type="submit"
        className="bg-gray-200 hover:bg-gray-400 px-6 py-2 rounded-xl mt-10"
      >
        Ok
      </button>
    </form>
  );
};

export default LoginForm;
