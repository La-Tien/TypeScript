import React from 'react';
import { Button, Checkbox, Form, Input, Typography} from 'antd';
import { useForm } from 'react-hook-form';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { IPropsAddUser } from '../interface/auth';
import { useNavigate } from 'react-router-dom';


const {Title} = Typography;



const Signin = (props: IPropsAddUser) => {
  const navigate = useNavigate()
    const { register,
        handleSubmit,
         formState: { errors } 
       } = useForm()

       const onFinish = (data: any) => {
        console.log('Received values of form: ', data);
        props.onLogin(data)
        navigate('/')
      };
    return (
        <div>
            <Title>Signin</Title>
            <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        {...register("name")}
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        {...register("password")}
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
        </div>
    )
}

export default Signin