import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getAllCate } from '../../api/category';
const text = {
    "color": "red"
}
const check = yup.object({
    name: yup.string().matches(/([a-z])/).required(),
    price: yup.number().positive().required(),
    cateId: yup.number().required(),
}).required()
type Tcheck = yup.InferType<typeof check>

type Props = {}

const AddProduct = (props: Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Tcheck>({
        resolver: yupResolver(check)
    })

    const navigate = useNavigate()

    const [cate, setCate] = useState([])
    useEffect(() => {
        getAllCate().then(({ data }) => setCate(data))
    }, [])

    const onSubmit = (data: any) => {
        props.onAdd(data)
        alert("Them san pham thanh cong")
        navigate('/admin/products')
    }
    return (
        <div>
            <h1>AddProduct</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Ten san pham </label>
                    <input {...register('name')} />
                    <p style={text}>{errors.name?.message}</p>
                </div>
                <div>
                    <label htmlFor="">Gia san pham </label>
                    <input {...register('price')} />
                    <p style={text}>{errors.price?.message}</p>
                </div>
                <div>
                    <label htmlFor="">Danh muc san pham </label>
                    <input {...register('catId')} />
                    <p style={text}>{errors.cat?.message}</p>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddProduct