
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Form, Input, Select, InputNumber, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import { Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import { IProduct, IPropsAdd } from '../../../interface/product';
import { useNavigate, useParams } from 'react-router-dom';
import { ICategory } from '../../../interface/category';
import { getAllCategory } from '../../../api/category';

const fileList: UploadFile[] = [
  {
    uid: '0',
    name: 'xxx.png',
    status: 'uploading',
    percent: 33,
  },
  {
    uid: '-1',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'zzz.png',
    status: 'error',
  },
];




const UpdateProduct = (props) => {

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getAllCategory().then(({ data }) => {
      categories.filter((item) => !categories.includes(item))
      setCategories(data)
    })
  }, [])
  console.log("categories", categories)

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IProduct>()

  const { id } = useParams();
  useEffect(() => {
    const currentProduct = props.products.find((products) => products.id === Number(id));
    console.log("currentProduct", currentProduct)
    reset(currentProduct)
  }, [props])

  const onSubmit: SubmitHandler<IProduct> = data => {
    console.log('data', data);
    props.onUpdate(data);
    navigate('/admin/products')

  }
  return (
    <div>
      <h1>Update product</h1>
      <form action=""
        name="nest-messages"
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Name"  >
          <input {...register("name",{ required: true })} />
        </Form.Item>

        <Form.Item label="Price">
          <input type='number' {...register("price",{ required: true })} />

          {/* <InputNumber
  
            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
            onChange={onHandleChange}
          /> */}
        </Form.Item>

        <Form.Item label="Image"  {...register("image")}>
          {/* <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            defaultFileList={[...fileList]}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload> */}
          <input type="file" name="" id="" />
        </Form.Item>

        <Form.Item label="Category" rules={[{ required: true }]}>
          <select placeholder="Categories" >
            {categories.map((item: ICategory) => (
              <option value="item.id" {...register("categoryId",{ required: true })}> {item.name}</option>
            ))}
          </select>


        </Form.Item>

        <Form.Item label="Description" rules={[{ required: true }]}>
          {/* <Input.TextArea /> */}
          <textarea {...register("desc",{ required: true })} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          {/* <Button type="primary" htmlType="submit">
            Submit
          </Button> */}
          <input  type="submit" />
        </Form.Item>
        {/* </Form> */}
      {/* </Form> */}
    </form>
    </div >
  )
}

export default UpdateProduct