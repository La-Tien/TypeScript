import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const UpdateProduct = (props) => {
    const navigate = useNavigate()
    const {id} = useParams();
    const [products, setProducts] = useState({});
    const [inputValue, setInputValue] = useState({});
    useEffect(() =>{
        const currentProduct = props.products.find(item => item.id == id);
        setProducts(currentProduct)
    })
    const onHandleChange = (e) => {
        const {name, value} = e.target;
        setInputValue({...inputValue, [name]: value});
    }
    const onhandleSubmit = (e) =>{
        e.preventDefault()
        const updateData = {...products, ...inputValue};
        props.onUpdate(updateData)
        navigate('/admin/products')
    }
  return (
    <div>
        <form action="" onSubmit={onhandleSubmit}>
            <input type="text" name="name" id="" defaultValue={products?.name} onChange={onHandleChange}/>
            <input type="number" name="price" id="" defaultValue={products?.price} onChange={onHandleChange}/>
            <button type="submit">Update Product</button>
        </form>
    </div>
  )
}

export default UpdateProduct