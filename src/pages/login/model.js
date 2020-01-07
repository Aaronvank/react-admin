import { login } from '@/services/actions'
import router from 'umi/router';

export default {
  namespace: 'login',

   state: {},

  effects: {
    *login({ payload }, { put, call, select }){
      const data = yield call(login, payload)
      router.push('/dashboard')
    }
  }
}