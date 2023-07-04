import { Header } from "@/components/Header";
import { Aside } from "@/components/aside";
import { Availability } from "@/components/availability";
import { ProgressBar } from "@/components/progressBar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { GetServerSideProps } from "next";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css'

const montSerrat = Montserrat({ subsets: ["latin"] })

export default function Home() {

    const [currentStep, setCurrentStep] = useState<number>(1);
    const availableHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };
    const handleHourSelect = (hour: number) => {
        console.log(`Horário selecionado: ${hour}`);
    };
    function click(day: any) {
        const timestamp = day.toISOString()
        console.log(timestamp)
    }
    const isWeekend = (date: Date) => {
        const day = date.getDay()
        return day === 0 || day === 6
    }
    const [date, setDate] = useState<Date>()
    const day = date ? date : new Date()
    const formatedDate = format(day, 'PPPP', { locale: ptBR })
    console.log(date)
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log('Nome:', name);
        console.log('Número de telefone:', phoneNumber);

        setName('');
        setPhoneNumber('');
    };
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
                    onDayClick={click}
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
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border border-gray-300 rounded-md p-2 mb-3 w-full"
                    />
                    <input
                      type="tel"
                      placeholder="Telefone"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="border border-gray-300 rounded-md p-2 mb-3 w-full"
                    />
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