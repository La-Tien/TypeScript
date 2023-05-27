import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import { IUser } from '../interface/auth'
const text = {
    "color": "red"
}

const check = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required()
type Tcheck = yup.InferType<typeof check>

type Props = {
    onSignin: (user: IUser) => void
}

const Signin = (props: Props) => {
    const {
        register, handleSubmit, formState: { errors }
    } = useForm<Tcheck>({
        resolver: yupResolver(check)
    })

    const navigate = useNavigate()

    const onSubmit = (data: any) => {
        props.onSignin(data)
        alert("Dang nhap tai khoan thanh cong")
        navigate('/admin')
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Email </label>
                    <input {...register('email')} />
                    <p style={text}> {errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="">Password </label>
                    <input {...register('password')} />
                    <p style={text}> {errors.password?.message}</p>
                </div>
                
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signin