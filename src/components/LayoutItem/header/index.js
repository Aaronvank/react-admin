import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon, Layout } from 'antd'
import './index.styl'


class Header extends PureComponent {
  render() {
    const {
      collapsed,
      onCollpaseChange,
    } = this.props

    return (
        <Layout.Header style={{ background: '#fff', padding: 0 }} >
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={ onCollpaseChange.bind(this, !collapsed) }
            style = {{marginLeft: '20px'}}
          />
          <div className="rightPanel">
            <img className="avater" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578487005306&di=e06d301cfc70f8dd06f2183d69e115b8&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Fbmiddle%2F851bbdecjw1e34j0y7xgyg.gif'} />
            遥知未眠月
          </div>
        </Layout.Header>
    )
  }
}

Header.propTypes = {
  collapsed: PropTypes.bool,
  onCollapseChange: PropTypes.func,
}

export default Header
