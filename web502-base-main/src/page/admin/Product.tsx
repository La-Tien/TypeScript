import React from 'react'
import { IProduct } from '../../interface/product'
import { Table, Button, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
type Props = {
    products: IProduct[]
    onRemove: (id: number) => void
}

const Product = ({ products, onRemove }: Props) => {

    const columns: ColumnsType<DataType> = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        { title: 'Category', dataIndex: 'cateId', key: 'cateId' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (item) =>
                <Space>
                    <Button onClick={() => onRemove(item.id)}>Delete</Button>
                    <Button><Link to={`/admin/products/${item.id}/update`}>Update</Link></Button>
                </Space>,
        },
    ];

    const data = products.map((item) => {
        return {
            key: item.id,
            ...item
        }
    })
    return (
        <div>
            <Table
                columns={columns}
                expandable={{
                    // expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                dataSource={data}
            />
        </div>
    )
}

export default Product