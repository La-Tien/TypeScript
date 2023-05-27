export interface ICategory  {
    _id: number,
    name: string
}
export interface IPropsCat {
    categorys: ICategory[],
    onRemoveCat: (id: number ) => void,
}