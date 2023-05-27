import React from 'react'
import { IProduct } from '../interface/product'

import { Card, List } from 'antd';

import { Link } from 'react-router-dom';

type Props = {
    products: IProduct[]

}

const ProductPage = (props: Props) => {
    const data = props.products.map((item) => {
        return {
            key: item.id,
            ...item
        }
    })
    return (
        <div>
            <h1>ProductPage</h1>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card >
                            <h2><Link to={`/products/${item.id}`}>{item.name}</Link></h2>
                            <h3>{item.price}</h3>
                            <p>{item.cateId}</p>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ProductPage