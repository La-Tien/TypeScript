import { IUser } from "../interface/auth"
import instance from "./instance"

const login = (user: IUser)=>{
    return instance.post('/signin', user)
}
const Register = (user: IUser)=>{
    return instance.post('/signup', user)
}
export {Register, login} 