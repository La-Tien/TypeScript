import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { IPropsAddSignup } from '../interface/auth';
import { useNavigate } from 'react-router-dom';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const { Title } = Typography;
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        password: '${label} is not a valid password!',
    },
    password: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */




const Signup = (props: IPropsAddSignup) => {

    const navigate = useNavigate()
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onFinish = (data: any) => {
        console.log(data);
        props.onRegister(data);
        navigate('/signin')
    };
    return (
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
        >
            <Title >Signup</Title>

            <Form.Item label="Name" {...register("name")} rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Email" {...register("email")} rules={[{ type: 'email', required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                {...register("password")}
                rules={[{ required: true, message: 'Please input your password!' }]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Confirm Password"
                dependencies={['password']}
                {...register("confirmPassword")}
                rules={[{ required: true },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
                ]}
                hasFeedback

            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Signup