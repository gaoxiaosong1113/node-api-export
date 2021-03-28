<h1 align="center">export-api</h1>
<div align="center">
一个快速生成api请求的工具
</div>

## 🔨 示例

解决前端项目中需要从 api 文档手动复制 api 接口道项目里的问题，可通过本工具一次性生成所需的 api 请求，文档更新后，重新生成即可。以下为生成的代码示例：

```javascript
/*
    项目名称 default
    开发者： name<https://github.com/gaoxiaosong1113,704041637@qq.com>
    部门：
    生成日期 2021-03-28 01:30:38
*/

import request from '@/request.js'

/**
 * * 轮播图列表
 * *
 */
export const postChart = option => request.post(`/rotation/chart`, option)
```

## 📦 安装

```bash
npm install -g exportApi
```

```bash
# 输入地址时只需输入前缀即可
# 如文档地址为 http://39.106.180.25:8091/swagger-ui.html 只需入http://39.106.180.25:8091
# 命令行输入 export-api 运行
export-api
```

## 📦 自定义头部模板

在使用的项目的根目录下创建`.exportapi`文件。

- @serviceId 为当前模板的名称
- @date 为生成时间

```js
/*
    项目名称 <%= serviceId %>
    开发者 <https://github.com/gaoxiaosong1113>
    部门：某某事业部
    生成日期 <%= date %>
*/

// 这里主要是需要导入一个 request 方法，方便生成的文件调用
import request from '@/request.js'
```

## 📦 自定义配置

在使用的项目的根目录下创建`.exportapirc.js`文件并默认导出。

```js
// .exportapirc.js
module.exports = {
  // 目前只支持 swaggerUrl 一个属性
  swaggerUrl: 'http://39.106.180.25:8091/',
}
```

## 🔗 支持列表

- swagger
- doclever(待兼容)
