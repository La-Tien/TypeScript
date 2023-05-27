import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductManagement = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])

    const removeProduct = (id) => {
        props.onRemove(id)
    }
    return (
        <div>
            <h1>Product</h1>
            <button> <Link to={'/admin/products/add'}>Add new Product</Link> </button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => removeProduct(item.id)}>Remove</button>
                                    <button>Update</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductManagement