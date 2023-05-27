import React, { useEffect, useState } from 'react'
import { IProduct } from '../interface/product'
import { get } from '../api/product'
import { useParams } from 'react-router-dom'
import { Card } from 'antd'
type Props = {
    products: IProduct[]
}

const ProductDetail = (props: Props) => {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    useEffect(() => {
        get(Number(id)).then(({ data }) => setProducts(data))
    }, [])
    return (
        <div>
                <h1>ProductDetail</h1>

            <Card>
                <h2>{products.name}</h2>
                <h3>{products.price}</h3>
                <p>{products.cateId}</p>
            </Card>
        </div>
    )
}

export default ProductDetail