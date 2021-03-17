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

/* 
  第三方中间件 
  用post请求处理URL时，我们会遇到一个问题：post请求通常会发送一个表单，或者JSON，
  它作为request的body发送，但无论是Node.js提供的原始request对象，还是koa提供的request对象，都不提供解析request的body的功能,
  koa-bodyparser解析原始request请求,把解析后的参数，绑定到ctx.request.body中
*/
router.get('/admin', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
});

router.post('/signin', async (ctx, next) => {
  var
    name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Try again</a></p>`;
  }
});
/* 类似的，put、delete、head请求也可以由router处理 */

/* 启动koa-router allowedMethods()是当所有路由中间件执行完成之后,若ctx.status为空或者404的时候,丰富response对象的header头. */
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
