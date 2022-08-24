const inquirer = require('inquirer')

const swaggerInit = require('./swagger.js')
const docleverInit = require('./doclever.js')
const axios = require('axios')



const headerConfig = {
    "Accept": "application/json, text/plain, */*",
    'Cookie': 'id=5fc5ac4626f96723391a5c5a; name=gaoxiaosong; email=gaoxiaosong%40croot.com; remember=1; pgv_pvid=9274059359; loginCount=5; connect.sid=s%3AfyYVwFSzAL8-tXp-mtvN8LcWoC8B4zq6.YHJkeoqgRFETvHlBYa4b288ojzs550d1WEWcmUsGy9k; __qc_wId=605',
}

axios.defaults.headers.get['content-type'] = 'application/json;charset=UTF-8'
axios.defaults.headers = {
    ...axios.defaults.headers,
    ...headerConfig
}

// 注意使用 api 的时候，模块下的axios配置会互相影响
const init = async config => {
  let choicesRes = await inquirer.prompt([
    {
      type: 'list',
      name: 'servers',
      message: '请选择需要生成的api服务',
      choices: [
        {
          name: 'swagger',
          value: 'swagger',
        },
        {
          name: 'doclever',
          value: 'doclever',
        },
      ],
    },
  ])
  if (choicesRes) {
    if (choicesRes.servers == 'swagger') {
      swaggerInit(config)
    } else {
      docleverInit(config)
    }
  }
}

module.exports = init
