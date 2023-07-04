import { api } from "@/lib/axios";

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
    console.log(response.data)
    } catch (error) {
        console.log(error.response.data.message)
    }
}