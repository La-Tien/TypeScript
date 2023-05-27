// import React, { useEffect, useState } from 'react'
import React from 'react';
import { useForm } from 'react-hook-form'
import { Button, Form, Input, Select, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
// import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { IPropsAdd } from '../../../interface/product';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../../interface/category';
import { getAllCategory } from '../../../api/category';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

// useEffect(() =>{

// })





const AddProductPage = async (props: IPropsAdd) => {

  // const [fileList, setFileList] = useState<UploadFile[]>([
  //   {
  //     uid: 'uid',
  //     name: 'css.png',
  //     // status: 'done',
  //     url: 'css.png',
  //   }
  // ])
  // const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
  //   setFileList(newFileList);
  // };
  // const [image, setImage] = useState("");
  // useEffect(() =>{
  // const urls = await uploadFiles(image.files);
  // })


  // const uploadFiles = async (files) => {
  //   if (files) {
  //     const CLOUD_NAME = "duqn6uvp2";
  //     const PRESET_NAME = "asm2-TypeScript";
  //     const FOLDER_NAME = "ASM-TypeScript";
  // const urls = [];
  // const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

  // const formData = new FormData();

  // formData.append("upload_preset", PRESET_NAME);
  // formData.append("folder", FOLDER_NAME);
  // for (const image of files) {
  //   formData.append("file", image);

  //   const response = await axios.post(api, formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //     .then((response) => console.log(response))
  //   // .then((response) => urls.push(response.data.secure_url))
  //   // urls.push(response.data.secure_url)
  //   // setImage(files);
  // }
  // // console.log(urls)


  // return urls;
  //   }
  // }

  // const [category, setCategory] = useState<ICategory[]>([])
  // // const [categories, setCategories] = useState<ICategory[]>([]);
  // useEffect(() => {
  //   getAllCategory().then(({ data }) => {
  //     // categories.filter((item) => !categories.includes(item))
  //     setCategory(data)
  //     // console.log(data);
  //   })
  // }, [])
  // // console.log("categories", category)

  // // const navigate = useNavigate();

  // const onHandleChange = (value: number | string) => {
  //   console.log('changed', value);
  // };
  // const onFinish = (values: any) => {
  //   // uploadFiles(values.files);
  //   console.log("values", values);
  //   // setImage(values)
  //   // const urls = uploadFiles(image.files);
  //   props.onAdd(values);
  //   // navigate('/admin/products')
  // };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategory().then(({ data }) => {
      // categories.filter((item) => !categories.includes(item))
      setCategories(data)
    })
  }, [])
  console.log("categories", categories)

  const navigate = useNavigate();

  const onHandleChange = (value: number | string) => {
    console.log('changed', value);
  };
  const onFinish = (values: any) => {
    console.log("values", values);
    if(confirm("Thêm sản phẩm thành công "))
    props.onAdd(values);
    navigate('/admin/products')
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  return (
    <div>
      <h1>Add new product</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item label="Name"  {...register("name")} rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item {...register("price")} label="Price" rules={[{ required: true }]}>
          <InputNumber

            // formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            // parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
            // onChange={onHandleChange}
          />
        </Form.Item>

        <Form.Item label="Image"  {...register("image")}>
          <Upload
            action="http://localhost:8080/api/image/upload"
            listType="picture"
          // defaultFileList={[...fileList]}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item  {...register("categoryId")} label="Category" rules={[{ required: true }]}>
          <Select
            mode="multiple"
            placeholder="Categories"
            // value={categories}
            options={categories.map((item: ICategory) => ({
              value: item._id,
              label: item.name,
            }))}
          />
        </Form.Item>

        <Form.Item  {...register("desc")} label="Description" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    // <div>
    //   <h1>Add new product</h1>
    //   <Form
    //     {...layout}
    //     name="nest-messages"
    //     onFinish={onFinish}
    //     style={{ maxWidth: 600 }}
    //     validateMessages={validateMessages}
    //   >
    //     <Form.Item label="Name"  {...register("name")} rules={[{ required: true }]}>
    //       <Input />
    //     </Form.Item>

    //     <Form.Item {...register("price")} label="Price" rules={[{ required: true }]}>
    //       <InputNumber

    //         formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    //         parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
    //         onChange={onHandleChange}
    //       />
    //     </Form.Item>


    //     <Form.Item label="Image" {...register("image")}>

    //       <Upload

    //         // fileList={fileList}
    //         // onChange={onChange}
    //         action=""
    //         listType="picture"
    //       // defaultFileList={[...fileList]}
    //       >
    //         <Button icon={<UploadOutlined />}>Upload</Button>
    //       </Upload>
    //       {/* <input type="file" onChange={(even) => (even.target.files) }  /> */}

    //     </Form.Item>

    //     <Form.Item {...register("categoryId")} label="Category" rules={[{ required: true }]}>
    //       {/* <Select
    //         mode="multiple"
    //         placeholder="Categories"
    //         value={categories}
    //         // {...register("categoryId")}

    //         options={categories.map((item: ICategory) => ({
    //           value: item._id,
    //           label: item.name,
    //         }))}
    //       /> */}
    //       <Select placeholder="Categories" >
    //         {categories.map((item: ICategory) => (
    //           <Select.Option value={item._id} {...register("categoryId", { required: true })}> {item.name}</Select.Option>
    //         ))}
    //       </Select>
    //       {/* <option value=""></option> */}
    //     </Form.Item>

    //     <Form.Item  {...register("desc")} label="Description" rules={[{ required: true }]}>
    //       <Input.TextArea />
    //     </Form.Item>

    //     <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    //       <Button type="primary" htmlType="submit">
    //         Submit
    //       </Button>
    //     </Form.Item>
    //   </Form>
    // </div>
  )
}

export default AddProductPage