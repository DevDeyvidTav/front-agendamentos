import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "@/components/Header";
import { Aside } from "@/components/aside";
import { GetServerSideProps } from "next";
import { Montserrat } from "next/font/google";
import { getUserDetails } from "@/services/auth";
import { DialogUser } from "@/components/DialogUser";


interface UserProps {
    name: string;
    email: string;
    id: string
}

const montSerrat = Montserrat({ subsets: ["latin"] })
export default function UserProfile() {
    const [isOpen, setIsOpen] = useState(false)
    const [calledFunction, setCalledFunction] = useState(false);
    const [appointments, setAppointments] = useState([
        { id: 1, date: "2023-06-21", time: "10:00 AM" },
        { id: 2, date: "2023-06-22", time: "02:00 PM" },
        { id: 3, date: "2023-06-23", time: "09:00 AM" },
    ]);
    function closeModal() {
        setIsOpen(false)
      }
      function openModal() {
        setIsOpen(true)
      }
    const [user, setUser] = useState<UserProps>()
    const router = useRouter();
    async function getDetails() {
        try {
            const response = await getUserDetails()
            setUser(response)
        } catch (error) {
            console.log(error)
        }
    }
    const handleEditProfile = () => {
        openModal()
    };
    useEffect(() => {
        if (calledFunction === false) {
            getDetails();
            setCalledFunction(true);
        }
    }, [calledFunction])
    return (
        <div className={` ${montSerrat.className} w-screen overflow-hidden max-w-full h-screen`}>
            <Header />
            <div className="flex mt-16  w-full h-full">
                <Aside />
                <div className="w-2/5 h-[70vh] mt-24 mx-auto bg-white p-8 border rounded shadow">
                    <div className="mx-auto w-72">
                        <div className="flex gap-6 items-center">
                            <div className="bg-primary justify-center flex items-center w-20 h-20  rounded-full">
                                {user ? <p className="text-white text-4xl font-semibold">
                                    {String(user?.name)[0].toUpperCase()}
                                </p> : ""}
           
                            </div>
                            <div>
                                    <p className="mt-1 font-semibold">{user?.name.toUpperCase()}</p>
                                    <p className="mt-1 font-semibold">{user?.email.toUpperCase()}</p>
                                </div>
                        </div>
                        <div className="mb-4 mt-12">
                            <label className="font-bold">Agendamentos:</label>
                            <ul className="mt-1">
                                {appointments.map((appointment) => (
                                    <li key={appointment.id}>
                                        {appointment.date} - {appointment.time}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button
                            className="bg-primary text-white py-2 px-4 rounded"
                            onClick={handleEditProfile}
                        >
                            Editar Perfil
                        </button>

                    </div>
                </div>
            </div>
            <DialogUser

            isOpen={isOpen}
            closeModal={closeModal}
            />
        </div>
    );
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