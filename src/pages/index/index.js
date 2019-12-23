import { connect } from 'dva'
import styles from './index.styl'

function Index(props) {
  console.log('props', props);
  function clickFn() {
    const { dispatch } = props;
    dispatch({
      type: 'index/getData',
      params: { id: 1 }
    });
  }
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li onClick={clickFn}>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    title: state.index.title
  };
}

export default connect(mapStateToProps)(Index);
