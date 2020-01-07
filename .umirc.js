// ref: https://umijs.org/config/
import { resolve } from 'path'

export default {
  disableCSSModules: true,
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' },
  //       { path: '/login', component: '../pages/login' },
  //       { path: '/detail', component: '../pages/detail' }
  //     ]
  //   },
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.q
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'react-admin',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  alias: {
    api: resolve(__dirname, './src/services/'),
    components: resolve(__dirname, './src/components'),
    assets: resolve(__dirname, './src/assets'),
  },
}
