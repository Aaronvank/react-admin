export default {
  namespace: 'app',
  state: {
    collapsed: false
  },

  reducers: {
    handleCollapseChange(state, { payload }) {
      console.log(state)
       return {collapsed : payload }
    }
  }
}