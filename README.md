<h1 align="center">node-api-export</h1>
<div align="center">
一个快速生成api请求的工具
</div>

## 🔨 示例

解决前端项目中需要从 api 文档手动复制 api 接口道项目里的问题，可通过本工具一次性生成所需的 api 请求，文档更新后，重新生成即可。

```javascript
/*
    项目名称 default
    开发者 高晓松<gaoxiaosong@croot.com,704041637@qq.com>
    私募事业部
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
exportApi
```

## 🔗 支持列表

- swagger
- doclever(待兼容登录)
