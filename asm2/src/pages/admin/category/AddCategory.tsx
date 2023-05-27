import React from 'react';
import { Button, Form, Input } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ICategory } from '../../../interface/category';
import { useNavigate } from 'react-router-dom';

type ICat = {
    onAddCategory(category: ICategory)
}
const AddCategory = (props: ICat) => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate()
    const onSubmit: SubmitHandler<ICategory> = (data: ICategory) => {
        console.log(data)
        props.onAddCategory(data)
        navigate('/admin')
    }
    return (
        <div>
            <h1>Add new category</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" {...register("name", { required: true })} />
                </div>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </form>
        </div>

    )

}
export default AddCategory;