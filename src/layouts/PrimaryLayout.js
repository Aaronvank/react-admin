import React, { PureComponent, Fragment } from 'react'
import { Layout } from 'antd';
import { MyLayout } from 'components'
import { connect } from 'dva';

const { Content } = Layout
const { Header, Sider, Bread } = MyLayout

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
    const headerProps = {
      collapsed,
      onCollpaseChange
    }

    return(
      <Fragment>
      < Layout style = {
        {
          height: '100%',
        }
      } >
        <Sider collapsed={ collapsed } />
        <Layout>
          < Header {...headerProps} / >
          < Bread / >
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