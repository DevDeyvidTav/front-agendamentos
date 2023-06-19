import { FaEnvelope } from 'react-icons/fa';

interface EmailProps {
   register: any
}

export function EmailInput({register}: EmailProps) {
  return (
    <div className="relative">
      <input
        {...register}
        placeholder="Digite seu Email"
        className="w-96 h-12 rounded-full border-2 outline-none focus:duration-500 focus:border-primary border-secondary px-12 text-primary placeholder:text-secondary"
      />
      <FaEnvelope className="absolute left-3 top-4 text-secondary" />
    </div>
  );
}