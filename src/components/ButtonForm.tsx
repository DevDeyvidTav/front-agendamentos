import { FaEnvelope, FaSignInAlt } from 'react-icons/fa';

interface ButtonProps {
  text: string;
}

export function FormButton({ text }: ButtonProps) {
    return (
    <button
    className="w-96 py-3 flex items-center justify-center text-white bg-secondary hover:bg-primary hover:duration-500 rounded-full shadow"
  >
    <FaSignInAlt className="mr-2" />
    {text}
  </button>
  );
}
