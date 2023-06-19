import React from 'react';
import { IoPerson } from 'react-icons/io5';

interface NameProps {
  register: any;
}

export function NameInput({ register }: NameProps) {
  return (
    <div className="relative">
      <input
        {...register}
        placeholder="Digite seu Nome"
        className="w-96 h-12 rounded-full border-2 outline-none focus:duration-500 focus:border-primary border-secondary px-12 text-primary placeholder:text-secondary"
      />
      <IoPerson className="absolute left-3 top-4 text-secondary" />
    </div>
  );
}