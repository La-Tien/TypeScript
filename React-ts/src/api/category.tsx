import instance from "./instance";

const getAllCategory = () => {
    return instance.get("/Category")
}
const getCategory = (id: string | number) => {
    return instance.get(`/Category/${id}?_embed=projects`)
}
export {getAllCategory, getCategory}