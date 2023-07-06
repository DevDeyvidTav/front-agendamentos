import axios from "axios"
import { AxiosError } from "axios"
import Cookies from "js-cookie"
import { toast } from "react-toastify"


interface signInProps{
    email: string,
    password: string
}

export async function signIn(data: signInProps){
    try {
        const response = await axios.post('http://localhost:3000/users/auth', data)
        const {token} = response.data
        Cookies.set('token', token)
        window.location.pathname = "/dashboard"
        
    } catch (error) {
        if(error instanceof AxiosError){
            toast.error(error.response?.data.message)
        }
        console.error(error)
    }
}

export async function Register(data: signInProps){
    try {
        const response = await axios.post('http://localhost:3000/users/', data)
        window.location.pathname = "/"
        return response.data
        
    } catch (error) {
        if(error instanceof AxiosError){
            toast.error(error.response?.data.message)
        }
        console.error(error)
    }
}
export async function signOut(){
    try {
        Cookies.remove('token')
        window.location.reload()
        
    } catch (error) {
        alert(error)
    }
}