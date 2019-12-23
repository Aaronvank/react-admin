import styles from './index.styl';

function BasicLayout(props) {
  const { pathname } = props.location;
  if (pathname === '/login') {
    return (
      <div>
        {props.children}
      </div> )
  }
  return (
    <div>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
