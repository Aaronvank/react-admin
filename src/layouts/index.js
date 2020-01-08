import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import NProgress from 'nprogress'
import withRouter from 'umi/withRouter'

import PublicLayout from './PublicLayout'
import PrimaryLayout from './PrimaryLayout'
import './index.less'


@withRouter
@connect(({ loading }) => ({ loading }))
class BaseLayout extends PureComponent{
  previousPath = ''

  componentDidMount() {
    console.log('props', this.props)
  }

  render() {
    const { loading, children, location } = this.props
    const Container = location.pathname === '/login' ? PublicLayout : PrimaryLayout

    const currentPath = location.pathname + location.search
    if (currentPath !== this.previousPath) {
      NProgress.start()
    }

    if(!loading.global){
      NProgress.done()
      this.previousPath = currentPath
    }

    return (
      <Fragment>
        <Container>{ children }</Container>
      </Fragment>
    )
  }
}

BaseLayout.propTypes = {
  loading: PropTypes.object
}

export default BaseLayout