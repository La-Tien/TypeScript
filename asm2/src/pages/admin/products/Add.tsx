import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Form, Input, Select, InputNumber, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
// import type { UploadFile } from 'antd/es/upload/interface';
import { IProduct, IPropsAdd } from '../../../interface/product';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../../interface/category';
import { getAllCategory } from '../../../api/category';
import axios from 'axios';
// import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile } from 'antd/es/upload/interface';
import instance from '../../../api/instance';
import 'bootstrap/dist/css/bootstrap.min.css'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from "yup";

const text= {
    "color":"red",
}
const schema = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().required(),
    images: Yup.string().required(),
    desc: Yup.string().required(),
    categoryId: Yup.string().required(),
}).required();
type TCheck = Yup.InferType<typeof schema>;



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const Add = (props) => {
    const [images, setImages] = useState("");
    console.log(images)
    const [categories, setCategories] = useState<ICategory[]>([]);
    useEffect(() => {
        getAllCategory().then(({ data }) => {
            // categories.filter((item) => !categories.includes(item))
            setCategories(data)
        })
    }, [])

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TCheck>({ resolver: yupResolver(schema) })

    const uploadFiles = async () => {
        // if () {

        const CLOUD_NAME = "duqn6uvp2";
        const PRESET_NAME = "asm2-TypeScript";
        const FOLDER_NAME = "ASM-TypeScript";
        const urls = [];

        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
        // const api = `http://localhost:8080/api/image/upload`;
        const formData = new FormData();

        formData.append("upload_preset", PRESET_NAME);
        formData.append("folder", FOLDER_NAME);
        // for (const images of files) {
        formData.append("file", images);

        const response = await axios.post(api, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
            // ).then((response) => console.log(response)
        )
        // .then(({ data }) => setImages(data.secure_url))
        // .then(( data ) => urls.push(data.secure_url))
        // console.log("response", response);

        // urls.push(response.data.secure_url)

        console.log("URL", urls)
        return urls;
    }




    const onSubmit: SubmitHandler<IProduct> = (data: IProduct) => {
        console.log("Them thanh cong: ", data);
        const urls = uploadFiles();
        // instance.post('/image/upload', urls);
        if (confirm("Thêm sản phẩm thành công"))
            props.onAdd(data);
        navigate('/admin/products')
    };

    return (
        <div>
            <h1>Add new product</h1>
            <form
                method='post'
                action='http://localhost:8080/api/image/upload'
                {...layout}
                name="nest-messages"

                onSubmit={handleSubmit(onSubmit)}
                style={{ maxWidth: 600 }}
            // defaultValue={`${validateMessages}`}
            >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" {...register("name", { required: true })} />
                    <p  style={text}>
                        {errors.name?.message}
                    </p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input className="form-control" type='number' {...register("price", { required: true })} />

                    <p  style={text}>{errors.price?.message}</p>

                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input className="form-control" type='file'{...register("images", { required: true })} multiple onChange={(event: any) => setImages(event.target.files[0])} />
                    <p  style={text}>{errors.images?.message}</p>

                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select className="form-control"
                        {...register("categoryId", { required: true })}

                    >
                        {categories.map((item) => (
                            <option key={item._id} value={item._id} > {item.name}</option>

                        ))}
                    </select>
                    <p  style={text}>{errors.categoryId?.message}</p>

                </div><div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" {...register("desc", { required: true })} />
                    <p style={text}>{errors.desc?.message}</p>

                </div>

                <Button onClick={uploadFiles} type="primary" htmlType="submit">
                    Submit
                </Button>
            </form>
        </div >
    )
}

export default Add