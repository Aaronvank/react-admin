import { Form, Icon, Input, Button } from 'antd'
import { useState } from 'react';
import { login } from '@/services/actions'
import './index.styl'

export default function() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  async function handelSubmit() {
    console.log('userName', userName);
    console.log('password', password);
    const res = await login();
    console.log('res', res);
  }

  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='title'>系统登录</div>
        <Form>
          <Form.Item>
            <Input
              prefix={<Icon type="user" />}
              placeholder="Username"
              onChange={(e) => setUserName(e.currentTarget.value) }
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handelSubmit} className="login-form-button">
              登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
