import React from 'react';
import { Button, Checkbox, Form, Input, Col, Row, Radio, RadioChangeEvent } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface FormProps {}

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const options = [
  { label: 'Student', value: 'Student' },
  { label: 'Teacher', value: 'Teacher' },
  { label: 'Manager', value: 'Manager' },
];

// const Login: React.FC = () => ()
const Login = () => {
  const [role, setRole] = React.useState('Student');
  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio checked', value);
    setRole(value);
  };
  return (
    <>
      <Row justify="center">
        <Col md={12} sm={20}>
          <p className="login-heading">Course Management</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form
              name="basic"
              labelCol={{ span: 24 }}
              style={{ maxWidth: 400 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="role"
                initialValue={role}
                rules={[
                  {
                    required: true,
                    message: 'Please choose your role !',
                  },
                ]}
                style={{ textAlign: 'left' }}
              >
                <Radio.Group
                  options={options}
                  onChange={onChange}
                  value={role}
                  optionType="button"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter a valid email address',
                  },
                  {
                    type: 'email',
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="xxx@admin.com" type="email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                  { min: 6 },
                ]}
              >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  Log In
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
