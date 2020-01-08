import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon, Layout, Menu } from 'antd'


class Sider extends PureComponent {
  render() {
    const {
      collapsed,
    } = this.props

    return (
        <Layout.Sider trigger={null}  collapsed={collapsed} >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
    )
  }
}

Sider.propTypes = {

}

export default Sider
