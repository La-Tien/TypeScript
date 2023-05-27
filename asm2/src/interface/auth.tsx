export interface IUser{
    _id?: number|string,
    name?: string,
    email: string,
    password?: string,
    role?: string
}
export interface IPropsAddUser {
    users: IUser[],
    onLogin: (user: IUser) => void
}

export interface IPropsAddSignup {
    onRegister: (user: IUser) => void
}