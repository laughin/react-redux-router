gm-client
==============================
**三国2管理台前端 React Redux Router 架构**

**时间线**

- 2016-11-03 初步实现了脚手架工作，可以基于该架构进行开发。
- 2016-11-11 架构定型，暂定这个环境，目前可满足开发要求，之后根据业务再丰富架构功能。

## 安装
```
npm install
```
使用webpack开发打包部署

## 启动
```
npm start
```
开发使用 express 启动服务，启动后访问:http://localhost:9090

## 打包
```
npm run deploy
```
打包文件在根目录dist目录下，放到任意Web服务下即可。

## 主要额外插件API
- babel-loader 主要使用ES6开发，使用Babel转义
- source-map-loader 浏览器开发调试
- express 本地开发服务
- react-router 路由组织管理
- axios fetch异步请求封装
- cross-env 解决跨平台问题

## 目录结构
```
.
├─ build/            # Webpack 配置目录
├─ dist/             # build 生成的生产环境下的项目
├─ src/              # 源码目录
│   ├─ components/     # 业务组件
│   ├─ store/          # STORE
│   ├── app.js         # 启动文件
│   ├── index.html     # Index页
│   ├── reducers.js    # REDUCER
│   ├── routes.js      # ROUTE
├── static/          # 放置无需经由 Webpack 处理的静态文件
├── .babelrc         # Babel 转码配置
├── .eslintignore    # ESLint 检查中需忽略的文件
├── .eslintrc        # ESLint 配置
├── .gitignore       # 需被 Git 忽略的文件
├── package.json     # 项目描述文件
```
