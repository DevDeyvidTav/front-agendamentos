import { Montserrat } from 'next/font/google'
import { EmailInput } from '@/components/EmailInput'
import { PasswordInput } from '@/components/PasswordInput'
import { FormButton } from '@/components/ButtonForm'
import { Logo } from '@/components/Logo'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaAuth } from '@/validations/schema_auth'
import { signIn } from '@/services/auth'
import { GetServerSideProps } from 'next'


const inter = Montserrat({ subsets: ['latin'] })

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaAuth) });
  const handleLogin = async (credentials: any) => {
    console.log(credentials)
    const response = await signIn(credentials)
    console.log(response)
  }

  return (
    <main
      className={`w-screen h-screen bg-gradient-to-b flex from-primary to-secondary ${inter.className}`}
    >
      <div className='w-1/2 flex justify-center items-center' >
        <Logo />
      </div>
      <div className='w-1/2 bg-white rounded-3xl rounded-r-none'>
        <div className='w-1/2 mx-auto my-32'>
          <h2 className='text-4xl text-primary  font-bold'>Olá, seja bem vindo</h2>
          <p className=' text-center'>faça login para continuar</p>
          <form
            onSubmit={handleSubmit(info => handleLogin(info))}
            className='w-auto mt-10 flex flex-col gap-2'>
            <EmailInput register={register("email", {})} />
            <p className='text-xs text-red-500'>{errors && errors.email?.message}</p>
            <PasswordInput register={register("password")} />
            <p className='text-xs text-red-500'>{errors && errors.password?.message}</p>
            <a
              className=' w-96 underline flex justify-end text-sm'
              href="#"
            >Esqueceu a senha?
            </a>
            <FormButton text='Entrar' />
          </form>
          <p className='text-sm w-full text-center mt-5 '>não possui conta? <a className='text-primary hover:underline hover:duration-500' href='/register'>registre-se</a></p>
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if(req.cookies.token){
    res.setHeader('Location', '/dashboard'),
    res.statusCode = 302
    res.end()
  }

  return {
    props: {}
  }
}