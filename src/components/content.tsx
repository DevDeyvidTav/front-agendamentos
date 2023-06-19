import { CardScheduling } from "./CardScheduling";


interface ContentProps{
    date: string
}
export function Content({date}: ContentProps) {
    function deleteCard() {

    }
    function editCard() {

    }
    return (
        <div className="w-1/2 flex overflow-y-scroll items-center max-h-full flex-col gap-2 pt-10 h-full">
            {date && <div className="text-2xl text-primary font-bold">
                    {String(date)}
                </div>}
            <CardScheduling
                name="Deyvid"
                onDelete={deleteCard}
                onEdit={editCard}
                phone="819970210434"
                time="10:00" />
            <CardScheduling
                name="Teste"
                onDelete={deleteCard}
                onEdit={editCard}
                phone="81999999999"
                time="11:00" />
                            <CardScheduling
                name="Teste"
                onDelete={deleteCard}
                onEdit={editCard}
                phone="81999999999"
                time="11:00" />
                            <CardScheduling
                name="Teste"
                onDelete={deleteCard}
                onEdit={editCard}
                phone="81999999999"
                time="11:00" />
                            <CardScheduling
                name="Teste"
                onDelete={deleteCard}
                onEdit={editCard}
                phone="81999999999"
                time="11:00" />
                            <CardScheduling
                name="Teste"
                onDelete={deleteCard}
                onEdit={editCard}
                phone="81999999999"
                time="11:00" />
                            <CardScheduling
                name="Teste"
                onDelete={deleteCard}
                onEdit={editCard}
                phone="81999999999"
                time="11:00" />

        </div>
    )
}