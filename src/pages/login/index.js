import React, { PureComponent,Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'

import styles from './index.styl'
const FormItem = Form.Item

@connect (({ loading }) => ({ loading }))
@Form.create()
class Login extends  PureComponent{
  handleLogin = () => {
    const { dispatch, form } = this.props
    const { validateFieldsAndScroll } = form
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }

  render() {
    const { loading, form } = this.props
    const { getFieldDecorator } = form
    return (
      <Fragment>
        <div className='login'>
          <div className='form'>
            <div className='logo'>
              <span>Goktech Admin</span>
            </div>
            <form>
              <FormItem hasFeedback>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(
                  <Input
                    onPressEnter={this.handleLogin}
                    placeholder='请输入用户名'
                  />
                )}
              </FormItem>
              <FormItem hasFeedback>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(
                  <Input
                    type="password"
                    onPressEnter={this.handleLogin}
                    placeholder='请输入密码'
                  />
                )}
              </FormItem>
              <Row>
                <Button
                  type="primary"
                  onClick={this.handleLogin}
                  loading={loading.effects.login}
                >
                  登录
                </Button>
              </Row>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}

Login.propTypes = {
  form: PropTypes.object,
  dispath: PropTypes.func,
  loading: PropTypes.object
}

export default Login
