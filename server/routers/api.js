// 在server里新建一个router.js文件

import Router from 'koa-router'

const router = new Router()
/* http://localhost:3000/city/list?id=123&name=zhangsan */
router.get('/list', async (ctx) => {
  ctx.body = {
    list: ['北京', '上海', '菏泽']
  }

  /* 获取 GET 请求接收参数 */

  /*
  ctx.query       返回格式化的参数对象
  ctx.querystring 返回请求字符串
  */
  // console.log(ctx.query)
  // console.log(ctx.querystring)

  /* 通过request获取传参 */
  // console.log(ctx.request)

  /* 通过request+query */
  // console.log(ctx.request.query)
  // console.log(ctx.request.querystring)
})

/* 动态路由 */
router.get('/home/:id/:pkid', async (ctx) => {
  ctx.body = `动态路由传值`
  // ctx.params 获取动态路由传值
  console.log(ctx.params)
})

export default router
