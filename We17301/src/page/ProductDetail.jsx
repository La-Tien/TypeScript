import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [products, setProducts] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/product/` + id)
            .then(response => response.json())
        then(data => setProducts(data))
    })
    return (
        <div>
            <h1>ProductDetailPage</h1>
            <h2>{products.name}</h2>
        </div>
    )
}

export default ProductDetail