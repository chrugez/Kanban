import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";

const { Title, Paragraph, Text } = Typography;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const [form] = Form.useForm();

  const handleLogin = (value: { email: string; password: string }) => {
    console.log(value);
  };
  return (
    <Card className="w-1/2">
      <div className="text-center">
        <Title>Login into your account</Title>
        <Paragraph type="secondary">Welcome back! Please enter your detail.</Paragraph>
      </div>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleLogin}
        disabled={isLoading}
        size="large"
      >
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
          <Input allowClear maxLength={100} type="email" placeholder="Enter your email"/>
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
          <Input.Password maxLength={100} placeholder="********"/>
        </Form.Item>
      </Form>
      <div className="flex items-center justify-between">
        <div>
          <Checkbox
            checked={isRemember}
            onChange={(value) => setIsRemember(value.target.checked)}
          >
            Remember for 30 days
          </Checkbox>
        </div>
        <div>
          <Link to={"/forgot-password"} className="text-blue-600">
            Forgot password
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <Button
          onClick={() => form.submit()}
          type="primary"
          style={{ width: "100%" }}
          size="large"
        >
          Sign in
        </Button>
      </div>
      <SocialLogin />
      <div className="mt-4 text-center">
        <Space>
          <Text type="secondary">Don't have an account? </Text>
          <Link to={"/sign-up"} className="text-blue-600">
            Sign up
          </Link>
        </Space>
      </div>
    </Card>
  );
};

export default Login;
