import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
import { toast } from "react-toastify";
import handleAPI from "../../apis/handleAPI";
import { useDispatch } from "react-redux";
import { addAuth } from "../../redux/reducer/authReducer";

const { Title, Paragraph, Text } = Typography;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleLogin = async (values: { email: string; password: string }) => {
    console.log(values);
    setIsLoading(true);
    try {
      const res: any = await handleAPI("/auth/login", values, "post");

      toast.success(res.message);
      if (res.data) dispatch(addAuth(res.data));
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Card className="w-3/4">
      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <img src="src/assets/Logo.png" alt="logo" />
        </div>
        <Title level={2}>Login into your account</Title>
        <Paragraph type="secondary">
          Welcome back! Please enter your detail.
        </Paragraph>
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
          <Input
            allowClear
            maxLength={100}
            type="email"
            placeholder="Enter your email"
          />
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
          <Input.Password maxLength={100} placeholder="********" />
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
