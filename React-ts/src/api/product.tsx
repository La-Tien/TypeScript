import { IProduct } from "../interface/product"
import instance from "./instance"

export const getAll = () => {
    return instance.get('/product')
}

export const get = (id: number | string) => {
    return instance.get(`/product/${id}`)
}

export const create = (products: IProduct) => {
    return instance.post('/product', products)
}

export const remove = (id: number | string) => {
    return instance.delete(`/product/${id}`)
}

export const update = (products: IProduct) => {
    return instance.put(`/product/${products.id}`, products)
}