'use client';

import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import { FieldProps } from './type';

export default function Field({
  text,
  type,
  classNameInput,
  placeholder,
  onInput,
}: FieldProps) {
  return (
    <div className="mb-4 grid grid-cols-4">
      <Label text={text} />
      <Input
        type={type}
        className={classNameInput}
        placeholder={placeholder}
        onInput={(param: string) => onInput(param)}
      />
    </div>
  );
}
