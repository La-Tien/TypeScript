// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { Button, Form, Input, Select, InputNumber } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import { Upload } from 'antd';
// import type { UploadFile } from 'antd/es/upload/interface';
// import { IPropsAdd } from '../../../interface/product';
// import { useNavigate } from 'react-router-dom';
// import { ICategory } from '../../../interface/category';
// import { getAllCategory } from '../../../api/category';
// import axios from 'axios';

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };

// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };


// const fileList: UploadFile[] = [
//   {
//     uid: '0',
//     name: 'CLOUD_NAME',
//     status: 'uploading',
//     percent: 33,
//     url: 'urls'
//   },
//   {
//     uid: '-1',
//     name: 'yyy.png',
//     status: 'done',
//     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//   },
//   {
//     uid: '-2',
//     name: 'zzz.png',
//     status: 'error',
//   },
// ];



// const AddProduct = (props: IPropsAdd ) => {

//   const [categories, setCategories] = useState<ICategory[]>([]);
//   useEffect(() => {
//     getAllCategory().then(({ data }) => {
//       // categories.filter((item) => !categories.includes(item))
//       setCategories(data)
//     })
//   }, [])
//   console.log("categories", categories)

//   const navigate = useNavigate();

//   const onHandleChange = (value: number | string) => {
//     console.log('changed', value);
//   };
//   const onFinish =  (values: any) => {
//     console.log("values", values);
//     props.onAdd(values);
//     navigate('/admin/products')
//   };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm()

//   return (
//     <div>
//       <h1>Add new product</h1>
//       <Form
//         {...layout}
//         name="nest-messages"
//         onFinish={onFinish}
//         style={{ maxWidth: 600 }}
//         validateMessages={validateMessages}
//       >
//         <Form.Item label="Name"  {...register("name")} rules={[{ required: true }]}>
//           <Input />
//         </Form.Item>

//         <Form.Item {...register("price")} label="Price" rules={[{ required: true }]}>
//           <InputNumber

//             formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
//             parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
//             onChange={onHandleChange}
//           />
//         </Form.Item>

//         <Form.Item label="Image"  {...register("image")}>
//           <Upload
//             action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//             listType="picture"
//             defaultFileList={[...fileList]}
//           >
//             <Button icon={<UploadOutlined />}>Upload</Button>
//           </Upload>
//         </Form.Item>

//         <Form.Item  {...register("categoryId")} label="Category" rules={[{ required: true }]}>
//           <Select
//             mode="multiple"
//             placeholder="Categories"
//             // value={categories}
//             options={categories.map((item: ICategory) => ({
//               value: item.id,
//               label: item.name,
//             }))}
//           />
//         </Form.Item>

//         <Form.Item  {...register("desc")} label="Description" rules={[{ required: true }]}>
//           <Input.TextArea />
//         </Form.Item>

//         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   )
// }

// export default AddProduct

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form, Input, Select, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import { IPropsAdd } from '../../../interface/product';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../../interface/category';
import { getAllCategory } from '../../../api/category';
import axios from 'axios';

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






const Add = (props: IPropsAdd) => {

    const [categories, setCategories] = useState<ICategory[]>([]);
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

                        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
                        onChange={onHandleChange}
                    />
                </Form.Item>

                <Form.Item label="Image"  {...register("image")}>
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        // defaultFileList={[...fileList]}
                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item  {...register("categoryId")} label="Category" rules={[{ required: true }]}>
                    <Select
                        value={categories}
                    >
                        {categories.map((item) => (
                            <Select.Option key = { item.id } value = { item.id } > { item.name }</Select.Option>

                        ))}
                </Select>
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
        </div >
    )
}

export default Add