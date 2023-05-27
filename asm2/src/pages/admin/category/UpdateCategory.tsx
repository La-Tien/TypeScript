import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ICategory, IPropsCat } from '../../../interface/category';
import { useNavigate, useParams } from 'react-router-dom';

// type ICat = {
//     categorys: ICategory[],
//     onAddCategory(category: ICategory)
// }
const UpdateCategory = (props) => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm()

    const navigate = useNavigate()

    const { id } = useParams();
  useEffect(() => {
    const currentProduct = props.categorys.find((cat: ICategory) => cat._id == id);
    console.log("currentProduct", currentProduct)
    reset(currentProduct)
  }, [props])
    const onSubmit: SubmitHandler<ICategory> = data => {
        console.log(data)
        props.onUpdateCat(data)
        navigate('/admin/category')
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
export default UpdateCategory;