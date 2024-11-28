import { Button, Card, Form, Input, message, Space, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
import handleAPI from "../../apis/handleApi";
import { useDispatch } from "react-redux";
import { addAuth } from "../../redux/reducer/authReducer";

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSignup = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log(values);
    const api = "/auth/register";
    setIsLoading(true);
    try {
      const res = await handleAPI(api, values, "post");
      if (res.data) {
        message.success(res.data.message);
        dispatch(addAuth(res.data));
      }
    } catch (error: any) {
      console.log(error);
      message.error(error.message);
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
        <Title level={2}>Create an account</Title>
        <Paragraph type="secondary">Start your 30-day free trial</Paragraph>
      </div>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSignup}
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
          <Input allowClear placeholder="Enter your name" />
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
            () => ({
              validator: (_, value) => {
                if (value.length < 8) {
                  return Promise.reject(
                    new Error("Your password must have at least 8 charactors!")
                  );
                } else {
                  return Promise.resolve();
                }
              },
            }),
          ]}
        >
          <Input.Password maxLength={100} placeholder="Create a password" />
        </Form.Item>
      </Form>
      <div className="mt-4">
        <Button
          loading={isLoading}
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
          <Text type="secondary">Already have an account? </Text>
          <Link to={"/"} className="text-blue-600">
            Login
          </Link>
        </Space>
      </div>
    </Card>
  );
};

export default SignUp;
