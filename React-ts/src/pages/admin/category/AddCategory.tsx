import React from 'react';
import { Button, Form, Input } from 'antd';
import { useForm } from 'react-hook-form';

const AddCategory = () => {
    const { register, formState: { errors } } = useForm()

    return (
        <div>
            <h1>Add new category</h1>
            <Form
            >
                <Form.Item
                    label="Category name"

                    rules={[{ required: true, message: 'Please input your category!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )

}
export default AddCategory;