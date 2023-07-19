import { editSchedules } from "@/services/schedules";
import { schemaregister } from "@/validations/schema_auth";
import { Dialog, Transition } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';


import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { editProfile } from "@/services/auth";

interface DialogProps {
  isOpen: boolean;
  closeModal: () => void;
}

export function DialogUser({ isOpen, closeModal }: DialogProps) {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaregister) });
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleFormSubmit = async (event: any) => {
    const data = {
      ...event
    }
    editProfile(data)
    closeModal();
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative outline-none z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Edite seu agendamento
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={handleSubmit(info => handleFormSubmit(info))}>
                    <div>
                      <label htmlFor="name" className="block font-medium ">
                        Nome
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        id="name"
                        className="border-gray-300 focus:ring-primary outline-none px-2 h-10 focus:border-primary block w-full sm:text-sm border rounded-md"
                      />
                      {errors && <p className="text-red-500">{errors.name?.message}</p>}
                    </div>
                    <div className="mt-4">
                      <label htmlFor="phone" className="block font-medium">
                        Email
                      </label>
                      <input
                        {...register("email")}
                        type="text"
                        id="phone"
                        className="border-gray-300 focus:ring-primary outline-none px-2 h-10 focus:border-primary block w-full sm:text-sm border rounded-md"
                      />
                      {errors && <p className="text-red-500">{errors.email?.message}</p>}
                    </div>
                    <div className="mt-4">
                      <label htmlFor="password" className="block font-medium">
                        Senha
                      </label>
                      <div className="relative">
                        <input
                          {...register("password")}
                          type={showPassword ? "text" : "password"}
                          id="password"
                          className="border-gray-300 focus:ring-primary outline-none px-2 h-10 focus:border-primary block w-full sm:text-sm border rounded-md"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                        >
                          {showPassword ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />}
                        </button>
                      </div>
                      {errors && <p className="text-red-500">{errors.password?.message}</p>}
                    </div>

                    <div className="mt-4 flex justify-center gap-2">

                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-primary hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Voltar
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Salvar
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
