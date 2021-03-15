// 在server里新建一个router.js文件

import Router from 'koa-router'

const router = new Router({
  prefix: '/city'
})

router.get('/list', async (ctx) => {
  ctx.body = {
    list: ['北京', '上海', '菏泽']
  }
})

export default router
