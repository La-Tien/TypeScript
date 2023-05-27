// import { ICategory } from "./category"
// import * yup from 'yup'
export interface IProduct {
    _id?: number ,
    name: string,
    price: number,
    images: URL,
    desc: string,
    categoryId: number | string
}

export interface IProps {
    products: IProduct[],
    onRemove: (id: number ) => void,
}
export interface IPropsAdd {
    products: IProduct[],
    onAdd: (product: IProduct) => void,
}

// export interface UploadFile {
//     uid: number | string,
//     name: string,
//     // files: File,
//     status: string,
//     url: string
// }

export interface IDetail {
    product: IProduct[],
    onDetail(id: number|string)
}