export interface IUser{
    _id?: number|string,
    name?: string,
    email: string,
    password: string
}
export interface IPropsAddUser {
    onLogin: (user: IUser) => void
}

export interface IPropsAddSignup {
    onRegister: (user: IUser) => void
}