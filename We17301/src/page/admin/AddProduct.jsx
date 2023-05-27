import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = (props) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({});
  const onHandleChange = (e) =>{
    const {name, value} = e.target;
    setInputValue({...inputValue, [name]: value});
  }
  const onhandleSubmit = (e) =>{
    e.preventDefault();
    props.onAdd(inputValue);
    navigate('/admin/products')
  }  
  return (
    <div>
        <form action="" onSubmit={onhandleSubmit}>
          <input type="text" placeholder='Products name' onChange={onHandleChange} name='name'/>
          <input type="number" placeholder='Price' onChange={onHandleChange} name='price'/>
          <button type='submit'>Add New Products</button>
        </form>
    </div>
  )
}

export default AddProduct;