'use client';

import { InputProps } from './type';

export const Input = ({
  type,
  className = '',
  placeholder,
  onInput,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={'border rounded ' + className}
      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
        onInput(e.target.value);
      }}
    />
  );
};

export default Input;
