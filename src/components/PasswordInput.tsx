import { useState } from 'react';
import {  FaEye, FaEyeSlash } from 'react-icons/fa';

interface PasswordProps {
  register: any
}
export function PasswordInput({register}: PasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        {...register}
        type={showPassword ? 'text' : 'password'}
        name='password'
        placeholder="Digite sua senha"
        className="w-96 h-12 rounded-full border-2 outline-none focus:duration-500 focus:border-primary border-secondary px-12 text-primary placeholder:text-secondary"
      />
    
      {showPassword ? (
        <FaEyeSlash
          className="absolute left-3 top-4 text-secondary cursor-pointer"
          onClick={togglePasswordVisibility}
        />
      ) : (
        <FaEye
          className="absolute left-3 top-4 text-secondary cursor-pointer"
          onClick={togglePasswordVisibility}
        />
      )}
    </div>
  );
}
