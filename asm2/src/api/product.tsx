import { IProduct } from "../interface/product"
import instance from "./instance"

const {accessToken} = JSON.parse(localStorage.getItem('user')!);

export const getAll = () => {
    return instance.get('/product')
}

export const get = (id: number | string) => {
    return instance.get(`/product/${id}`)
}

export const create = (products: IProduct) => {
    return instance.post('/product', products, 
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    )
}

export const remove = (id: number ) => {
    return instance.delete(`/product/${id}`, 
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    )
}

export const update = (products: IProduct) => {
    return instance.put(`/product/${products._id}`, products, 
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    )
}