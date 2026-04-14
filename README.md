# 🛒 基于 Vue3 的电商平台前台开发

![Vue.js](https://img.shields.io/badge/Vue.js-3.X-4FC08D?style=flat-square&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-4.X-646CFF?style=flat-square&logo=vite)
![Pinia](https://img.shields.io/badge/Pinia-2.X-FFE16B?style=flat-square&logo=pinia)
![Element Plus](https://img.shields.io/badge/Element_Plus-2.X-409EFF?style=flat-square&logo=element-plus)

> 💡 **在线预览体验：** [点击访问在线项目](https://mddxiaotuxian.shop) 

## 📖 项目描述

基于 Vue3 开发的电商前台项目，包含首页、分类、详情、购物车、订单等核心模块。致力于还原真实 B2C 电商业务闭环，通过严谨的组件化与工程化手段，提供流畅的沉浸式购物体验。

## 🛠️ 技术栈

**Vue3 + Vue Router + Pinia + Element Plus + SCSS + Axios + Vite**

## ✨ 项目亮点 (Core Features)

* **模块化路由搭建与状态管理：** 基于 Vue Router 完成路由划分与模块开发，实现首页、分类、商品详情、购物车等页面搭建；使用 Pinia 管理用户信息与购物车数据，并结合持久化方式提升刷新后的数据保留体验。
* **双端购物车合并与高阶 SKU 联动：** 实现登录前后购物车合并，保证数据一致性；独立攻坚商品详情页的规格选择逻辑，基于图结构与幂集算法实现商品 SKU 选择与状态联动，提升复杂商品交互体验。
* **Axios 深度封装与防御性编程：** 基于 Axios 封装请求层，统一处理 Token 注入、异常提示与登录失效逻辑，提升代码复用性；同时结合可选链（`?.`）等构建前端防御机制，拦截空指针导致的白屏异常。
* **长列表无限加载与 API 现代重构：** 针对商品列表的长列表渲染，独立重构底层的无限触底加载（Infinite Scroll）逻辑，解决旧版依赖 API 废弃问题，配合扩展运算符实现增量数据的无缝拼接，消除分页割裂感。
* **页面性能调优与极致首屏体验：** 通过全局自定义指令（`v-lazy`）实现图片懒加载等方式优化页面性能，降低首屏并发请求压力，提升首屏加载速度与用户体验。

## 🚀 本地运行与部署

### 启动步骤

```bash
# 1. 克隆项目到本地
git clone https://github.com/mddnbb66-bit/vue_rabbit.git

# 2. 进入项目目录
cd 你的仓库名

# 3. 安装依赖
npm install

# 4. 启动本地开发服务器
npm run dev
