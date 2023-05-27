import { ICategory } from "./category"

export interface IProduct {
    id: number | string,
    name?: string,
    price: number  | string,
    image: string,
    desc: string,
    categoryId: number | string
}

export interface IProps {
    products: IProduct[]
    onRemove: (id: number | string) => void,
}
export interface IPropsAdd {
    
    onAdd: (product: IProduct) => void
}

export interface ISearch {
    search: string,
}

export interface IPropsSearch {
    products: IProduct[],
    searchs: ISearch[],
    onSearch: ( search: string) => void
}

// export interface UploadFile {
//     CLOUD_NAME: "duqn6uvp2",
//     PRESET_NAME:"asm2-TypeScript",
//     FOLDER_NAME: "ECMA_JS",
//     urls: [],
    
// }

// export interface IPropsUpload {
//     products: IProduct[],
//     upload: UploadFile[],
//     uploadFiles: ( search: string) => void
// }

