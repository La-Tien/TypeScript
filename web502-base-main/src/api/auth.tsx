import { instance } from "./instance"
import {IUser} from '../interface/auth'

export const register = (user: IUser) => {
    return instance.post('/users', user)
}