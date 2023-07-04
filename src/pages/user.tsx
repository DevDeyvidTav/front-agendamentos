import { useState } from "react";
import { useRouter } from "next/router";
import { Header } from "@/components/Header";
import { Aside } from "@/components/aside";
import { GetServerSideProps } from "next";

export default function UserProfile() {
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@example.com");
    const [appointments, setAppointments] = useState([
        { id: 1, date: "2023-06-21", time: "10:00 AM" },
        { id: 2, date: "2023-06-22", time: "02:00 PM" },
        { id: 3, date: "2023-06-23", time: "09:30 AM" },
    ]);

    const router = useRouter();

    const handleEditProfile = () => {
        router.push("/edit-profile");
    };

    return (
        <div className="w-screen overflow-hidden max-w-full h-screen">
            <Header />
            <div className="flex mt-16  w-full h-full">
                <Aside />
                <div className="w-2/5 h-[70vh] mt-24 mx-auto bg-white p-8 border rounded shadow">
                    <div className="mx-auto w-48">
                        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
                        <div className="mb-4">
                            <label className="font-bold">Nome:</label>
                            <p className="mt-1">{name}</p>
                        </div>
                        <div className="mb-4">
                            <label className="font-bold">Email:</label>
                            <p className="mt-1">{email}</p>
                        </div>
                        <div className="mb-4">
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