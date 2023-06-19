import { Montserrat } from 'next/font/google';
import { EmailInput } from '@/components/EmailInput';
import { PasswordInput } from '@/components/PasswordInput';
import { FormButton } from '@/components/ButtonForm';
import { Logo } from '@/components/Logo';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaregister} from '@/validations/schema_auth';
import { NameInput } from '@/components/NameInput';
import { Register } from '@/services/auth';

const inter = Montserrat({ subsets: ['latin'] });

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaregister) });
  const [data, setData] = useState("");
  console.log(data);

  async function  handleRegister(data: any) {
    const response = await Register(data)
    console.log(response)
  };

  return (
    <main className={`w-screen h-screen bg-gradient-to-b flex from-primary to-secondary ${inter.className}`}>
      <div className='w-1/2 flex justify-center items-center'>
        <Logo />
      </div>
      <div className='w-1/2 bg-white rounded-3xl rounded-r-none'>
        <div className='w-1/2 mx-auto my-32'>
          <h2 className='text-4xl text-primary font-bold'>Crie sua conta</h2>
          <form onSubmit={handleSubmit(data => handleRegister(data))} className='w-auto mt-10 flex flex-col gap-2'>
            <NameInput register={register("name", {})} />
            <p className='text-xs text-red-500'>{errors && errors.name?.message}</p>
            <EmailInput register={register("email", {})} />
            <p className='text-xs text-red-500'>{errors && errors.email?.message}</p>
            <PasswordInput register={register("password")} />
            <p className='text-xs text-red-500'>{errors && errors.password?.message}</p>
            <FormButton text='Registrar' />
          </form>
          <p className='text-sm w-full text-center mt-5'>
            Já possui conta? <a className='text-primary hover:underline hover:duration-500' href='/'>Faça login</a>
          </p>
        </div>
      </div>
    </main>
  );
}