/* 请求体配置 */
import axios from 'axios'
import CONFIG from '@/services/config'
import { message } from 'antd'

export default function Request(options = {}) {
  /* 请求头 */
  const headers = {
    'Content-Type': options.isForm ? 'multipart/form-data' : 'application/json;charset=UTF-8'
  };
  const httpRequestBody = {
    headers: headers,
    method: options.method || 'GET',
    url: CONFIG.dev + options.url,
    withCredentials: true,
    timeout: 1800000
  };

  if (Object.is(httpRequestBody.method, 'POST') || Object.is(httpRequestBody.method, 'PUT')) {
    httpRequestBody.data = options.data || '';
  } else {
    httpRequestBody.params = options.data || '';
  }
  return axios(httpRequestBody).then((res) => {
    return res.data;
  }, () => {
    message.error('服务器繁忙，请稍后重试~');
  });
}
