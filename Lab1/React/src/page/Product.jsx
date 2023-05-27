import React, { useEffect, useState } from 'react'

const Product = (props) => {
    
    const remove = (id) =>{
        useEffect(() =>{
          fetch(`http://localhost:3000/products/` + id, {
            method: "DELETE"
          })
        })
      }
  return (
    <div>
        <h1>Product</h1>
        {props.products.map(product =>{
        return <div key={product.id}>
            <h2>{product.name}
            </h2>
        <button onClick={remove}>Renove</button>
        </div>
        
    })}
    </div>
    
  )
}

export default Product