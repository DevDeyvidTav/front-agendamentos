import axios from "axios"
import { AxiosError } from "axios"
import Cookies from "js-cookie"


interface signInProps{
    email: string,
    password: string
}

export async function signIn(data: signInProps){
    try {
        console.log(data)
        const response = await axios.post('http://localhost:3000/users/auth', data)
        const {token} = response.data
        Cookies.set('token', token)
        window.location.pathname = "/dashboard"
        
    } catch (error: AxiosError | any) {
        console.log(error)
        alert(error.response.data.message)
    }
}

export async function Register(data: signInProps){
    try {
        console.log(data)
        const response = await axios.post('http://localhost:3000/users/', data)
        window.location.pathname = "/"
        return response.data
        
    } catch (error) {
        console.log(error)
        alert(error.response.data.message)
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