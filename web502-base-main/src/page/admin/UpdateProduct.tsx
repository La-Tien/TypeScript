import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { getAllCate } from '../../api/category'
import { useNavigate , useParams} from 'react-router-dom'
import { IProduct } from '../../interface/product'
const text = {
    "color": "red"
}

const check = yup.object({
    name: yup.string().matches(/([a-z])/).required(),
    price: yup.number().positive().required(),
    cateId: yup.number().required(),
}).required()
type Tcheck = yup.InferType<typeof check>

type Props = {
    products: IProduct[]
    onUpdate: (product: IProduct) => void
}

const UpdateProduct = (props: Props) => {
    const {
        register, handleSubmit, reset, formState: { errors }
    } = useForm<Tcheck>({
        resolver: yupResolver(check)
    })

    const navigate = useNavigate()

    const [cate, setCate] = useState([])
    useEffect(() => {
        getAllCate().then(({ data }) => setCate(data))
    }, [])
    const { id } = useParams()
    useEffect(() => {
        const current = props.products.find((item) => item.id == id)
        reset(current)
    }, [props])
    const onSubmit = (data: any) => {
        props.onUpdate(data)
        alert("Cap nhat san pham thanh cong")
        navigate('/admin/products')
    }
    return (
        <div>
            <h1>UpdateProduct</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Ten san Pham </label>
                    <input {...register('name')} />
                    <p style={text}> {errors.name?.message}</p>
                </div>
                <div>
                    <label htmlFor="">Gia san Pham </label>
                    <input {...register('price')} />
                    <p style={text}> {errors.price?.message}</p>
                </div>
                <div>
                    <label htmlFor="">Ten san Pham </label>
                    <select {...register('cateId')} >
                        {
                            cate.map((item: any) => (
                                <option value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                    <p style={text}> {errors.cateId?.message}</p>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateProduct