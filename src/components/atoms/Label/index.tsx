'use client';

import { LabelProps } from './type';

export default function Label({ text }: LabelProps) {
  return <label>{text}</label>;
}
