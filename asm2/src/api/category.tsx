import { ICategory } from "../interface/category";
import instance from "./instance";
const {accessToken} = JSON.parse(localStorage.getItem('user')!);

const getAllCategory = () => {
    return instance.get("/categories")
}
const createCategory = (category: ICategory) => {
    return instance.post("/categories", category,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
const getCategory = (id: string | number) => {
    return instance.get(`/categories/${id}?_embed=product`)
}
const deleteCategory = (id: number) => {
    return instance.delete(`/categories/${id}`)
}

const updateCategory = (category: ICategory) => {
    return instance.put(`/product/${category._id}`, category)
}
export {getAllCategory, getCategory, createCategory, deleteCategory, updateCategory}