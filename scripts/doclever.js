const ora = require('ora')
const inquirer = require('inquirer')
const chalk = require('chalk')
const axios = require('axios')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
const moment = require('moment')

axios.defaults.withCredentials = true

const headerConfig = {
    "Accept": "application/json",
    'Cookie': 'connect.sid=s%3AZ_a0cil86AfHqyxex12E9sG_ntBOTjk-.W7RTONKcLlVtrsu8YLlPb4nd5HQmnsqjRqQ8Ur33Pr4; id=5fc5ac4626f96723391a5c5a; name=gaoxiaosong; email=gaoxiaosong%40croot.com; loginCount=1; remember=1; __qc_wId=658; pgv_pvid=9274059359',
}

axios.defaults.headers = {
    ...axios.defaults.headers,
    ...headerConfig
}

const loadingStart = (loadingText) => {
    return writeFileLoading = ora(loadingText || '加载中').start()
}

const configTemplatePath = '../template/api/config.ejs'
const docleverTemplatePath = '../template/api/doclever.ejs'
const requestHeaderTemplatePath = '../template/api/requestHeader.ejs'
const savePathPrefix = './request'
const saveFileName = 'request.js'

const init = async () => {
    let confirmRes = await inquirer.prompt([{
        type: 'confirm',
        name: 'confirm',
        message: '此操作会覆盖 request 的项目下的文件,是否继续?',
    }])
    if (confirmRes.confirm) {
        let inputRes = await inquirer.prompt([{
            type: 'input',
            name: 'path',
            message: '请输入doclever接口地址',
        }])
        const requestPath = inputRes.path + '/project/list'

        const spinner = loadingStart('加载中')
        let getAppNamesRes = await axios.get(requestPath)
        if (getAppNamesRes.status == 200) {
            spinner.stop()
            let choicesRes = await inquirer.prompt([{
                type: 'list',
                name: 'servers',
                message: '请选择 servers 项目',
                choices: getAppNamesRes.data.data.public.map((item, index) => {
                    return {
                        name: item.name,
                        value: item._id,
                    }
                })
            }])
            if (choicesRes) {

                const writeFileLoading = loadingStart('写入中')
                let getApiForJsByAppNameRes = await axios.get(`${pathHost}/project/interface?id=${choicesRes.servers}&sort=0&sbdoctimestamps=1606793605781`)

                writeFileLoading.stop()
                if (getApiForJsByAppNameRes.status == 200) {

                    let appInfo = getAppNamesRes.data.data.public.filter(item => item._id == choicesRes.servers)[0]
                    const savePath = `${savePathPrefix}/${appInfo.name}`
                    const saveExists = fs.existsSync(savePath)
                    if (!saveExists) {
                        fs.mkdirSync(savePath)
                    }
                    // let urlAry = handleAryThre(getApiForJsByAppNameRes.data.data)

                    const exists = fs.existsSync(savePath)
                    if (!exists) {
                        fs.mkdirSync(savePath)
                    } else {
                        if (fs.existsSync(`${savePath}/${saveFileName}`))
                            fs.unlinkSync(`${savePath}/${saveFileName}`)
                    }
                    let swaggerFile = String(fs.readFileSync(path.join(__dirname, configTemplatePath)))
                    let swaggerTemplate = ejs.compile(swaggerFile)
                    let swaggerStr = swaggerTemplate({ serviceId: appInfo.name, date: moment().format('YYYY-MM-DD HH:mm:ss') })

                    fs.writeFileSync(`${savePath}/${saveFileName}`, swaggerStr)

                    function handleAry(item) {
                        if (item.data) {
                            for (let i = 0; i < item.data.length; i++) {
                                let tagsItem = item.data[i]
                                if (item.data[i].url) {
                                    let requestFile = String(fs.readFileSync(path.join(__dirname, docleverTemplatePath)))
                                    let requestTemplate = ejs.compile(requestFile)
                                    let requestStr = requestTemplate({ tags: tagsItem, str: JSON.stringify(tagsItem) })
                                    fs.appendFileSync(`${savePath}/${saveFileName}`, requestStr.replace(/&#39;/g, '"'))
                                    console.log(chalk.green(`${tagsItem.name} 生成成功`))
                                } else {
                                    if (tagsItem.name.indexOf('回收') != -1) {
                                        continue;
                                    }
                                    
                                    let requestFile = String(fs.readFileSync(path.join(__dirname, requestHeaderTemplatePath)))
                                    let requestTemplate = ejs.compile(requestFile)
                                    let requestStr = requestTemplate({ tags: tagsItem, str: JSON.stringify(tagsItem) })
                                    fs.appendFileSync(`${savePath}/${saveFileName}`, requestStr)
                                    console.log(chalk.green(`${tagsItem.name} 头部信息设置成功`))
                                    handleAry(item.data[i])
                                }
                            }

                        }
                    }
                    handleAry(getApiForJsByAppNameRes.data.data)
                } else {
                    const message = '请求文件内容失败'
                    writeFileLoading.stop()
                    console.log(chalk.red(message))
                    throw error
                }
            } else {
                const message = '请求接口文档地址失败'
                writeFileLoading.stop()
                console.log(chalk.red(message))
                throw error
            }
        } else {
            const message = 'servers 列表请求失败'
            spinner.stop()
            console.log(chalk.red(message))
            throw error
        }
    } else {
        throw error
    }
}
module.exports = init
