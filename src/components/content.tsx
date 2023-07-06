import { CardScheduling } from "./CardScheduling";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";


interface SchedulesProps {
    date: string
    id: string,
    name: string,
    phone: string,
    userId: string
}
interface ContentProps {
    date: string,
    data: SchedulesProps[]
    isoDay: Date | string

}
export function Content({ date, data, isoDay }: ContentProps) {
    function deleteCard() {

    }
    function editCard() {

    }
    return (

        <div className="w-1/2 flex overflow-y-scroll items-center max-h-full flex-col gap-2 pt-10 h-full">
            {date && <div className="text-2xl text-primary font-bold">
                {String(date)}
            </div>}
            {
                data?.map((data, i) => {
                    const formatedData = format(parseISO(data.date), 'HH:mm', { locale: ptBR })
                    return (
                        <CardScheduling
                            date={isoDay}
                            key={i}
                            id={data.id}
                            name={data.name}
                            phone={data.phone}
                            time={formatedData} />
                    )
                })
            }

        </div>


    )
}