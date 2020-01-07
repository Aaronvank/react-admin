import React, { PureComponent, Fragment } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'dva';

const { Header, Sider, Content } = Layout;

@connect(({ app }) => ({ app }))
class PrimaryLayout extends PureComponent{
  // componentDidMount(){
  //   console.log('props', this.props)
  // }

  onCollpaseChange = collapsed => {
    this.props.dispatch({
      type: 'app/handleCollapseChange',
      payload: collapsed,
    })
  }

  render() {
    const { children,app } = this.props
    const { collapsed } = app
    const { onCollpaseChange } = this

    return(
      <Fragment>
      < Layout style = {
        {
          height: '100%',
        }
      } >
        <Sider trigger={null} collapsed={ collapsed } >
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
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={ onCollpaseChange.bind(this, !collapsed) }
              style = {{marginLeft: '20px'}}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
           { children }
          </Content>
        </Layout>
      </Layout>
      </Fragment>
    )
  }
}

export default PrimaryLayout