import { Header } from "@/components/Header";
import { Aside } from "@/components/aside";
import { Availability } from "@/components/availability";
import { ProgressBar } from "@/components/progressBar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
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
        // Faça algo com o horário selecionado, como armazená-lo no estado do formulário
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

        // Faça algo com os dados do formulário, como enviar para um servidor
        console.log('Nome:', name);
        console.log('Número de telefone:', phoneNumber);

        // Limpar os campos após o envio
        setName('');
        setPhoneNumber('');
    };
    return (
        <div className={`w-screen h-screen ${montSerrat.className}`}>
            <Header />
            <div className="w-full h-full pt-16 flex">
                <Aside />
                <div>
                    <div>
                        <ProgressBar currentStep={currentStep} />

                        {currentStep === 1 && (
                            <div>

                                <h2 className="text-primary text-3xl font-bold mt-5 ml-10">
                                    Selecione uma data
                                </h2>
                                <DayPicker
                                    onDayClick={click}
                                    classNames={{ day: "rounded-full w-10 h-10 text-center" }}
                                    disabled={isWeekend}
                                    locale={ptBR}
                                    className="bg-primary text-white rounded-3xl p-5 w-80 font-bold shadow-2xl"
                                    mode="single"
                                    fromDate={new Date()}
                                    selected={date}
                                    onSelect={setDate}

                                />
                                <button className="bg-primary px-5 py-1 rounded ml-10  text-white font-semibold" onClick={handleNextStep}>Próximo</button>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div>
                                <h2>Passo 2: Escolher horário</h2>
                                <div>
                                    {/* Outros elementos do formulário */}
                                    <Availability availableHours={availableHours} onHourSelect={handleHourSelect} />
                                </div>
                                <button className="bg-primary px-5 py-1 rounded ml-10 text-white font-semibold" onClick={handleNextStep}>Próximo</button>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div>
                                <h2>Passo 3: Adicionar nome e celular</h2>
                                <div>
                                    <h2>Adicionar Nome e Número de Telefone</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label htmlFor="name" className="block mb-2">
                                                Nome:
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="border border-gray-300 rounded-md px-3 py-2 w-64"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="phoneNumber" className="block mb-2">
                                                Número de Telefone:
                                            </label>
                                            <input
                                                type="text"
                                                id="phoneNumber"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                className="border border-gray-300 rounded-md px-3 py-2 w-64"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                                            Enviar
                                        </button>
                                    </form>
                                </div>
                                <button className="bg-primary px-5 py-1 rounded ml-10 text-white font-semibold" onClick={handleNextStep}>Próximo</button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}