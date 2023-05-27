import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {id} = useParams()
    fetch('http://localhost:3000/products/' + id)
        .then(response => response.json())
        .then(data => console.log(data))
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail