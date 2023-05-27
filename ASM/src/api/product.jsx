import axios from "axios";
import instance from "./instance";

const getAll = () => {
    return instance.get('/products')
}

const get = (id) => {
    return instance.get('/products' + id)
}

const remove = (id) => {
    return instance.delete('/products' +id)
}

const Add = (product) => {
    return instance.post('/products', product)
}

const Update = (product) => {
    return instance.put('/products' + product.id, product)
}

export {getAll, get, remove, Add, Update}