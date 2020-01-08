import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import Link from 'umi/navlink'
import withRouter from 'umi/withRouter'
import styles from './index.styl'

@withRouter
class Bread extends PureComponent {

  render(){
    return (
      <div className="bread">
        <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={ '/dashboard' }>面包1</Link>/
                <Fragment>
                    面包2
                </Fragment>
            </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}

Bread.propTypes = {
  //Todo.
}

export default Bread
