import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SocialLogin from './components/SocialLogin';

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [isRemember, setIsRemember] = useState(false);
  const [form] = Form.useForm();

  const handleLogin = (value: { name: string, email: string; password: string }) => {
    console.log(value);
  };
  return (
    <Card className='w-1/2'>
      <div className="text-center">
        <Title level={2}>Create an account</Title>
        <Paragraph type='secondary'>Start your 30-day free trial</Paragraph>
      </div>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleLogin}
        disabled={isLoading}
        size="large"
      >
        <Form.Item
          name={"name"}
          label="Name"
          rules={[
            {
              required: true,
              message: "Please enter your name!",
            },
          ]}
        >
          <Input allowClear placeholder='Enter your name'/>
        </Form.Item>
        <Form.Item
          name={"email"}
          label="Email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input allowClear maxLength={100} type="email" placeholder='Enter your email'/>
        </Form.Item>
        <Form.Item
          name={"password"}
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password maxLength={100} placeholder='Create a password'/>
        </Form.Item>
      </Form>
      <div className="mt-4">
        <Button
          onClick={() => form.submit()}
          type="primary"
          style={{ width: "100%" }}
          size="large"
        >
          Get started
        </Button>
      </div>
      <SocialLogin />
      <div className="mt-4 text-center">
        <Space>
          <Text type='secondary'>Already have an account? </Text>
          <Link to={"/login"} className="text-blue-600">
            Login
          </Link>
        </Space>
      </div>
    </Card>
  );
}

export default SignUp