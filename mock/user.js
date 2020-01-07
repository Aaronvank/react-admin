export default {
  // 支持值为 Object 和 Array
  'GET /api/users': (req, res) => {
    setTimeout(() => {
      res.status(200).json( {user: [1, 2]});
    }, 1000);
  },

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },
};
