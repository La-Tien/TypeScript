
import React from 'react'
import { instance } from './instance'
import { IProduct } from '../interface/product'

export const getAll = () => {
    return instance.get('/products')
}
export const get = (id: number) => {
    return instance.get(`/products/${id}`)
}
export const create = (product: IProduct) => {
    return instance.post('/products', product)
}
export const remove = (id: number) => {
    return instance.delete(`/products/${id}`)
}
export const update = (product: IProduct) => {
    return instance.put(`/products/${product.id}`, product)
}