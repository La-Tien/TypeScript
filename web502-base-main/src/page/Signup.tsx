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
    name: yup.string().matches(/([a-z])/).required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    role: yup.number().default(2).required(),
}).required()
type Tcheck = yup.InferType<typeof check>

type Props = {
    onSignup: (user: IUser) => void
}

const Signup = (props: Props) => {
    const {
        register, handleSubmit, formState: { errors }
    } = useForm<Tcheck>({
        resolver: yupResolver(check)
    })

    const navigate = useNavigate()

    const onSubmit = (data: any) => {
        props.onSignup(data)
        alert("Dang ky tai khoan thanh cong")
        navigate('/signin')
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Name </label>
                    <input {...register('name')} />
                    <p style={text}> {errors.name?.message}</p>
                </div>
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
                
                <div>
                    <input type='hidden' disabled {...register('role')} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup