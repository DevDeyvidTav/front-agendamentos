import { Header } from "@/components/Header";
import { Aside } from "@/components/aside";
import { Availability } from "@/components/availability";
import { ProgressBar } from "@/components/progressBar";
import { createSchedule } from "@/services/schedules";
import { FormaterDate } from "@/utils/helper";
import { schemaSchedules } from "@/validations/schema_schedules";
import { yupResolver } from "@hookform/resolvers/yup";
import { ptBR } from "date-fns/locale";
import { GetServerSideProps } from "next";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const montSerrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  const [date, setDate] = useState<any>();
  const [error, setError] = useState("")
  const [daySelected, setDaySelected] = useState("")
  const [currentStep, setCurrentStep] = useState<number>(1);
  const availableHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  const handleNextStep = () => {
    setError("")
    if(currentStep === 1 && date === undefined){
      toast.error("Você precisa selecionar uma data")
    }
    else if(currentStep === 2 && daySelected === ""){
      toast.error("Você precisa selecionar um horário")
    }

    else{
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const handleHourSelect = (hours: number) => {
    const dayIso = FormaterDate({ date, hours })
    setDaySelected(dayIso)
    console.log("helper:", dayIso );
  };
  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };
  console.log(error)

  function handleFormSubmit(event: any) {
    createSchedule({
      ...event,
      date: daySelected
    });
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaSchedules) });
  return (
    <div className={`w-screen h-screen ${montSerrat.className}`}>
      <Header />
      <div className="flex pt-16 h-full">
        <Aside />
        <div className="flex flex-col justify-center items-center w-full">
          <ProgressBar currentStep={currentStep} />
          <div className="w-96 h-3/4w bg-white rounded-lg shadow-xl p-8">


            {currentStep === 1 && (
              <div className="text-center">
                <h2 className="text-primary text-3xl font-bold mb-5">
                  Selecione uma data
                </h2>
                <DayPicker
                  fromDate={new Date()}
                  disabled={isWeekend}
                  locale={ptBR}
                  mode="single"
                  className="text-primary rounded-3xl p-5 font-bold"
                  selected={date}
                  onSelect={setDate}
                />
                <button
                  className="bg-primary px-5 py-2 rounded mt-5 text-white font-semibold"
                  onClick={handleNextStep}
                >
                  Próximo
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="text-center">
                <h2 className="text-primary text-3xl font-bold mb-5">
                  Escolha um horário
                </h2>
                <Availability
                  availableHours={availableHours}
                  onHourSelect={handleHourSelect}
                />
                <button
                  className="bg-primary px-5 py-2 rounded mt-5 text-white font-semibold"
                  onClick={handleNextStep}
                >
                  Próximo
                </button>
              </div>
            )}

            {currentStep === 3 && (
              <div className="text-center">
                <h2 className="text-primary text-3xl font-bold mb-5">
                  Informações de Contato
                </h2>
                <form onSubmit={handleSubmit(info => handleFormSubmit(info))}>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Nome"
                    className="border border-gray-300 rounded-md outline-none focus:border-primary p-2  w-full"
                  />
                  {errors && <p className="text-red-500 mb-3">{errors.name?.message}</p>}
                  <input
                  {...register("phone")}
                    type="tel"
                    placeholder="Telefone"
                    className="border border-gray-300 rounded-md p-2 outline-none focus:border-primary w-full"
                  />
                  {errors && <p className="text-red-500 mb-3">{errors.phone?.message}</p>}
                  <button
                    type="submit"
                    className="bg-primary px-5 py-2 rounded mt-5 text-white font-semibold"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (!req.cookies.token) {
    res.setHeader('Location', '/'),
      res.statusCode = 302
    res.end()
  }

  return {
    props: {}
  }
}