const axios = require('axios')
const fs = require('fs')
const path = require('path')

const savePathPrefix = './list'

const headerConfig = {}

axios.defaults.headers.get['content-type'] = 'application/json;charset=UTF-8'
axios.defaults.headers = {
  ...axios.defaults.headers,
  ...headerConfig,
}

let pathHost = 'http://new.xjlb7.com/api.php/app_2/'

let pageIndex = 1
let tol = 1
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxNDE0NDQ3NSIsImlzcyI6Inhqdm9kLnNlcnZpY2UubWFuYWdlciIsImV4cCI6MTYxNDgzODc3MX0.rRfg4E4wnjUicULZN4mvBZ0Q1Cb3U05krg_xxp17p10'

const init = async () => {
  let payList = await axios.get(`${pathHost}/typeSearch?uid=14144475&page=${pageIndex}&limit=${tol}&vod_big_class=%E9%AB%98%E6%B8%85%E6%97%A0%E7%A0%81&vod_lang=%E5%85%A8%E9%83%A8&vod_source=%E5%85%A8%E9%83%A8&vod_year=%E5%85%A8%E9%83%A8&vod_actor_class=%E5%85%A8%E9%83%A8&vod_class=%E5%85%A8%E9%83%A8&vod_area=%E5%85%A8%E9%83%A8&vod_type=%E5%85%A8%E9%83%A8&big_vod_class=%E5%85%A8%E9%83%A8&user_token=${token}`)
  if (payList.status == 200) {
    let list = payList.data.list
    for (let i = 0; i < list.length; i++) {
      let item = list[i]
      let newAddLookLog = await axios.post(`${pathHost}/newAddLookLog`, {
        uid: 14144475,
        vid: item.vod_id,
        vip: 1,
        user_token: token,
      })
      if (newAddLookLog.status == 200 && newAddLookLog.data.code != 3) {
        const savePath = `${savePathPrefix}`
        const saveExists = fs.existsSync(savePath)
        console.log(savePath)
        if (!saveExists) {
          fs.mkdirSync(savePath)
        }
        fs.writeFileSync(
          `${savePath}/${pageIndex}.json`,
          `
        ${item.vod_id}
        ${item.vod_name}
        ${item.vod_pic}
        ${newAddLookLog.data.data[0].url}`
        )
      }
    }
  }
  let time = setTimeout(() => {
    if (pageIndex < payList.data.pagecount) {
      pageIndex = pageIndex + 1
      clearTimeout(time)
      init()
    }
  }, 500)
}

init()
