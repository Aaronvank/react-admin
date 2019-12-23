/* 请求函数配置 */
import API from '@/services/apis'
import Request from '@/services/request'

export async function login(params) {
  return Request({
    url: API.LOGIN,
    data: params,
    isForm: 1
  })
}
