import React, { useEffect, useState } from 'react'
import { getAllCategory } from '../../../api/category'
import { ICategory, IPropsCat } from '../../../interface/category'
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

type Props = {}

const CategoryPage = (props: IPropsCat) => {
  const [category, setCategory] = useState<ICategory[]>([])
  useEffect(() => {
    getAllCategory().then(({ data }) => setCategory(data))
  }, [])
  const columns: ColumnsType<ICategory> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      render: (record: ICategory) => (
        <Space size={'middle'}>
          <Button type="primary" danger ghost onClick={() => onRemoveCategory(record._id)}>Delete</Button>
          <Button type="primary" ghost><Link to={`/admin/Category/update/${record._id}`}>Update</Link></Button>
        </Space>
      ),
    },
  ];
  const categories: ICategory[] = category.map((item: ICategory) => {

    return {
      key: item._id,
      ...item
    }
  });

  const onRemoveCategory = (id: number) => {
    props.onRemoveCat(id)
  }

  return (

    <div>
      <Link to={'/admin/Category/add'}>Add new category</Link>
      <Table
        columns={columns}
        expandable={{
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        dataSource={categories}
      />
    </div>
  )
}
export default CategoryPage