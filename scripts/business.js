const ora = require('ora')
const inquirer = require('inquirer')
const chalk = require('chalk')
const axios = require('axios')
const fs = require('fs')


inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: '此操作会覆盖选择的 servers 项目下的 info.js 文件,是否继续?',
}]).then(confirmRes => {
    if (confirmRes.confirm) {
        const spinner = ora('加载中').start()
        axios.get('http://tools.skong.com/api/generate/getAppNames').then(getAppNamesRes => {
            spinner.stop()
            inquirer.prompt([{
                type: 'list',
                name: 'servers',
                message: '请选择 servers 项目',
                choices: getAppNamesRes.data.data.map((item, index) => {
                    return {
                        name: item.name,
                        value: item.name,
                    }
                })
            }]).then(choicesRes => {
                const writeFileLoading = ora('写入中').start()
                axios.get(`http://tools.skong.com/api/generate/getApiForJsByAppName?appName=${choicesRes.servers}`).then(getApiForJsByAppNameRes => {
                    const path = `./services/${choicesRes.servers}`
                    const exists = fs.existsSync(path)
                    if (!exists) {
                        // const rmdir = fs.rmdirSync(path)
                        fs.mkdirSync(path)
                    }
                    fs.writeFileSync(`${path}/info.js`, getApiForJsByAppNameRes.data.data)
                    writeFileLoading.stop()
                    console.log(chalk.green('生成成功'))

                }).catch(error => {
                    const message = '请求文件内容失败'
                    writeFileLoading.stop()
                    console.log(chalk.red(message))
                    throw error
                })
            }).catch(error => {
                throw error
            })
        }).catch(error => {
            const message = 'servers 列表请求失败'
            spinner.stop()
            console.log(chalk.red(message))
            throw error
        })
    }
}).catch(error => {
    throw error
})
