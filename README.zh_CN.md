# egg-nodemailer

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-nodemailer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-nodemailer
[travis-image]: https://img.shields.io/travis/eggjs/egg-nodemailer.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-nodemailer
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-nodemailer.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-nodemailer?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-nodemailer.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-nodemailer
[snyk-image]: https://snyk.io/test/npm/egg-nodemailer/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-nodemailer
[download-image]: https://img.shields.io/npm/dm/egg-nodemailer.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-nodemailer

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-nodemailer 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.nodemailer = {
  enable: true,
  package: 'egg-nodemail',
};
```

## 使用场景

- Why and What: 描述为什么会有这个插件，它主要在完成一件什么事情。

封装nodemailer，使用第三方邮箱服务器发送邮件。
- How: 描述这个插件是怎样使用的，具体的示例代码，甚至提供一个完整的示例，并给出链接。

```js
// config/plugin.js'
// ...
nodemailer: {
  enable: true,
  package: 'egg-nodemail',
}
//...
```

```js
// config/config.default.js
// 配置邮箱服务器的账号信息
exports.nodemailer = {
  client: {
    host: 'your email host',
    port: 25,
    auth: {
      user: 'your username',
      pass: 'your password',
    },
  },
  app: true,
  agent: false,
};
```
在controller中使用
```js
// controller/xxxx.js
//...
const mail = {
  // 发件人
  from: 'xxx <xxx@xxx.com>',
  // 主题
  subject: '测试',
  // 收件人
  to: 'xxxx@xxxx.com',
  // 邮件内容，HTML格式
  text: '点击激活：xxx', // 接收激活请求的链接
};
const result = await this.app.nodemailer.sendMail(mail);
ctx.body = {
  info: 'success',
  result,
};
//...
```



## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
