export default {
  namespace: 'index',
  state: {
    title: 'hello world',
  },
  /* 副作用 异步更新*/
  effects: {
    *getData(action, { call, put }) {
      console.log('action', action);
      yield put({
        type: 'updateTitle',
        params: { title: 'new' }
      });
    },
  },
  /* 同步更新state */
  reducers: {
    updateTitle(state) {
      console.log('state', state);
      return {
        ...state,
      };
    }
  },
  /* 订阅数据源 */
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          console.log('执行订阅的动作');
        }
      });
    },
  },
};
