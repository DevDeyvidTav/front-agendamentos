import { Header } from "@/components/Header"
import { Aside } from "@/components/aside"
import { Content } from "@/components/content"
import { format, getTime } from "date-fns"
import { ptBR } from "date-fns/locale"
import { GetServerSideProps } from "next"
import { Montserrat } from "next/font/google"
import { useState } from "react"
import { DayPicker } from "react-day-picker"
import 'react-day-picker/dist/style.css'
import { FaPlus } from "react-icons/fa"
const montSerrat = Montserrat({ subsets: ['latin'] })


export default function Home() {
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
    const formatedDate = format(day, 'PPPP', {locale: ptBR})
    console.log(date)
    return (
        <div className={`w-screen h-screen max-w-full flex  ${montSerrat.className}`} >
            <Header />
            <div className="w-full h-screen max-h-full flex justify-between pt-16">
                <Aside />
                <Content date={(formatedDate)}/>
                <div className="flex flex-col items-center">
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
                    <button
                        className="bg-primary text-white flex items-center mt-5  gap-1 py-2 px-4 rounded"

                    >
                        <FaPlus className="text-xl" />
                        <span className="ml-2">Criar Novo Agendamento</span>
                    </button>
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