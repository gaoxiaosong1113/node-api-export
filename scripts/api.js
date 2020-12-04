const inquirer = require('inquirer')

const swaggerInit = require('./swagger.js')
const docleverInit = require('./doclever.js')


// 注意使用 api 的时候，模块下的axios配置会互相影响
const init = async () => {

    let choicesRes = await inquirer.prompt([{
        type: 'list',
        name: 'servers',
        message: '请选择需要生成的api服务',
        choices: [{
            name: 'swagger',
            value: 'swagger',
        }, {
            name: 'doclever',
            value: 'doclever',
        }
        ]
    }])
    if (choicesRes) {
        if (choicesRes.servers == 'swagger') {
            swaggerInit()
        } else {
            docleverInit()
        }

    }
}


init()
