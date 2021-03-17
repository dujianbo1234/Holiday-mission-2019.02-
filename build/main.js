require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./nuxt.config.js":
/*!************************!*\
  !*** ./nuxt.config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: 'Nuxt.js project'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#3B8070'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.Client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }

  },

  /*
   ** 关闭nuxt的乞讨声明
   */
  telemetry: false
};

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nuxt */ "nuxt");
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nuxt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routers_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routers/api */ "./server/routers/api.js");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable import/no-duplicates */

/* eslint-disable eqeqeq */
 // import views from 'koa-views'

 // 引入新建接口路由



 // eslint-disable-next-line one-var

const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a(),
      bodyParser = new koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default.a();
/* koa-bodyparser必须在router之前被注册到app对象上 */

app.use(bodyParser);
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

_routers_api__WEBPACK_IMPORTED_MODULE_2__["default"].get('/admin', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
});
_routers_api__WEBPACK_IMPORTED_MODULE_2__["default"].post('/signin', async (ctx, next) => {
  var name = ctx.request.body.name || '',
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

app.use(_routers_api__WEBPACK_IMPORTED_MODULE_2__["default"].routes()).use(_routers_api__WEBPACK_IMPORTED_MODULE_2__["default"].allowedMethods());

async function start() {
  const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 3000; // Import and Set Nuxt.js options

  const config = __webpack_require__(/*! ../nuxt.config.js */ "./nuxt.config.js");

  config.dev = !(app.env === 'production'); // Instantiate nuxt.js

  const nuxt = new nuxt__WEBPACK_IMPORTED_MODULE_1__["Nuxt"](config); // Build in development

  if (config.dev) {
    const builder = new nuxt__WEBPACK_IMPORTED_MODULE_1__["Builder"](nuxt);
    await builder.build();
  }

  app.use(ctx => {
    ctx.status = 200;
    ctx.respond = false; // Mark request as handled for Koa

    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash

    nuxt.render(ctx.req, ctx.res);
  });
  app.listen(port, host);
  console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
}

start();

/***/ }),

/***/ "./server/routers/api.js":
/*!*******************************!*\
  !*** ./server/routers/api.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
// 在server里新建一个router.js文件

const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();
/* http://localhost:3000/city/list?id=123&name=zhangsan */

router.get('/list', async ctx => {
  ctx.body = {
    list: ['北京', '上海', '菏泽']
  };
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
});
/* 动态路由 */

router.get('/home/:id/:pkid', async ctx => {
  ctx.body = `动态路由传值`; // ctx.params 获取动态路由传值

  console.log(ctx.params);
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "nuxt":
/*!***********************!*\
  !*** external "nuxt" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ })

/******/ });
//# sourceMappingURL=main.map