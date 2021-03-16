/* eslint-disable import/no-duplicates */
/* eslint-disable eqeqeq */
import Koa from 'koa'
// import views from 'koa-views'
import {
  Nuxt,
  Builder
} from 'nuxt'
// 引入新建接口路由
import api from './routers/api'
import BodyParser from 'koa-bodyparser'
import router from './routers/api'

// eslint-disable-next-line one-var
const
  app = new Koa(),
  bodyParser = new BodyParser()

/* koa-bodyparser必须在router之前被注册到app对象上 */
app.use(bodyParser)

/* 应用级中间件 匹配任意路由,不写next就不会继续匹配 */
// app.use(async (cxt, next) => {
//   console.log(new Date())
//   next()
// })

/* 路由级中间件 */
// router.get('/hello', async (ctx, next) => {
//   console.log('我是路由中间件')
//   await next()
// })

// router.get('/hello', async (ctx) => {
//   ctx.body = '我是也是呀'
// })

/*
  错误处理中间件
  koa中匹配的顺序会先匹配app.use()再去匹配router
*/
// router.get('/box', async (ctx) => {
//   console.log('电音王国01')
//   ctx.body = '电音王国01'
// })

// router.get('/bbox', async (ctx) => {
//   ctx.body = '电音王国02'
// })

// app.use(async (ctx, next) => {
//   console.log('中间件01')
//   next()

//   if (ctx.status == 404) {
//     ctx.status = 404
//     ctx.body = '404了呀!'
//   } else {
//     console.log(ctx.url)
//   }
// })

/* 第三方中间件 koa-bodyparser 获取 post请求 */
router.post('/login', async(ctx, next) => {
  ctx.body = ctx.request.body // 获取表单提交的数据
  next()
})

// 启动koa-router
app.use(api.routes()).use(api.allowedMethods())

async function start() {
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
