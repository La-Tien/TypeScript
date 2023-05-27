import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductManagementPage = (props) => {
    const [data, setData] = useState([])

    useEffect(() =>{
        setData(props.products)
    }, [props])

    const Remove = (id) =>{
        props.onRemove(id);
    }
    return (

        <div>
            <button><Link to='/admin/products/add'>Add new Products</Link></button>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Product Name</td>
                        <td>Description</td>
                        <td>Image</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        <tr key={item.id}>
                            <td>{index +1}</td>
                            <td>{item.name}</td>
                            <td>{item.desc}</td>
                            <td>{item.image}</td>
                            <td>
                                <button type='submit'onClick={() => Remove(item.id)}>Remove</button>
                                <button type='submit'>Update</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManagementPage