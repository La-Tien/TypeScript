import React, { useEffect, useState } from 'react'
import { IProduct, IProps, IPropsSearch } from '../../../interface/product';
import { Link } from 'react-router-dom';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useForm } from 'react-hook-form';
import { getAll } from '../../../api/product';

const ProductsManagement = (props: IProps) => {
    // const [products, setProduct] = useState<IProduct[]>([]);
    // const productFind = () =>{
    //     getAll().then(({data})=>{setProduct(data)})
    // }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const columns: ColumnsType<IProduct> = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image'
        },
        {
            title: 'Category',
            dataIndex: 'categoryId',
            key: 'categoryId'
        },

        {
            title: 'Action',
            dataIndex: '',
            key: 'action',
            render: (record) => (
                <Space size={'middle'}>
                    <button onClick={() => Remove(record.id)}>Delete</button>
                    <button><Link to={`/admin/products/update/${record.id}`}>Update</Link></button>
                </Space>
            ),
        },
    ];

    const Remove = (id: string | number) => {
        props.onRemove(id)
        console.log(id)
    }

    const [searchProduct, setSearchProduct] = useState<IProduct[]>([]);
    useEffect(() => {
        setSearchProduct(props.products);

    }, [props.products])
    const fethData = (value: any) => {
        getAll().then(({ data }) =>
        // console.log(data))
        {
            const results = data.filter((data: any) => {
                return (value && data && data.name.toLowerCase().includes(value))
            })
            setSearchProduct(results)
        })
    }
    const [input, setInput] = useState([]);
    console.log(input);
    const handleChange = (value: any) => {
        // setInput(value);
        setInput(value);
        if (value === "") {
            setSearchProduct(props.products)
        } else {
            fethData(value);
        }

    }
    const product: IProduct[] = searchProduct.map((item: IProduct) => {
        return {
            key: item.id,
            ...item

        }
    })
    return (
        <div>
            <Link to={'/admin/products/add'}>Add new product</Link>
            <form>
                <input className="my-3" placeholder='Search...' value={input} onChange={(e) => handleChange(e.target.value)}>
                </input>
            </form>
            {/* </form> */}
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.desc}</p>,
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                dataSource={product}
            />

        </div>
    )
}

export default ProductsManagement