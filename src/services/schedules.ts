import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export async function getSchedulesByUser(date: Date){
    const response =  await api.get('/schedules/user', {
        params: {
            date: date.toISOString()
        }
    })
    if (response.status === 401){
        console.log("não autorizado")
    }
    console.log(response.data)
    return response.data
}

export async function editSchedules(data: any){
    try {
        const response = await api.put("/schedules", data)
    if (response.status === 401){
        console.log("não autorizado")
    }
    toast.success("agendamento editado com sucesso")
    } catch (error) {
        if(error instanceof AxiosError){
            toast.error(error.response?.data.message)
        }
        console.error(error)
    }
}
export async function createSchedule(data: any){
    try {
        const response = await api.post("/schedules", data)
    if (response.status === 401){
        console.log("não autorizado")
    }
    toast.success("agendamento criado com sucesso")
    console.log(response.data)
    } catch (error) {
        if(error instanceof AxiosError){
            toast.error(error.response?.data.message)
        }
        console.error(error)
    }
}
export async function deleteSchedule(id: string){
    try {
        const response = api.delete('/schedules', {
            params: {id: id}
        })
        console.log(response)
    } catch (error) {
        if(error instanceof AxiosError){
            toast.error(error.response?.data.message)
        }
        console.error(error)
    }
}
