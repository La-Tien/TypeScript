import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = (props) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({})
  const onHandleChange = (e) => {
    const {name, value} = e.target;
    setInputValue({...inputValue, [name]: value})
  }
  const onHandleSubmit = (e) => {
    e.preventDefault()
    props.onAdd(inputValue);
    navigate('/admin/products')
  }
  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <input type="text" name="name" id="" placeholder='product name'  onChange={onHandleChange} />
        <input type="text" name="desc" id="" placeholder='product description' onChange={onHandleChange} />
        <input type="file" name="image" id="" placeholder='product image' onChange={onHandleChange} />
        <button type='submit'>Add products</button>
      </form>
    </div>
  )
}

export default AddProduct