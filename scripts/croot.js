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
    'Host': '192.168.1.56:10000',
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'DNT': '1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,vi;q=0.7',
    'Cookie': 'connect.sid=s%3AZ_a0cil86AfHqyxex12E9sG_ntBOTjk-.W7RTONKcLlVtrsu8YLlPb4nd5HQmnsqjRqQ8Ur33Pr4; id=5fc5ac4626f96723391a5c5a; name=gaoxiaosong; email=gaoxiaosong%40croot.com; loginCount=1; remember=1; __qc_wId=658; pgv_pvid=9274059359',
}

axios.defaults.headers = {
    ...axios.defaults.headers,
    ...headerConfig
}



inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: '此操作会覆盖 request 的项目下的文件,是否继续?',
}]).then(confirmRes => {
    if (confirmRes.confirm) {

        const spinner = ora('加载中').start()

        axios.get(`http://192.168.1.56:10000/project/list`, {
        }).then(getAppNamesRes => {
            spinner.stop()
            inquirer.prompt([{
                type: 'list',
                name: 'servers',
                message: '请选择 servers 项目',
                choices: getAppNamesRes.data.data.public.map((item, index) => {
                    return {
                        name: item.name,
                        value: item._id,
                    }
                })
            }]).then(choicesRes => {
                const writeFileLoading = ora('写入中').start()
                axios.get(`http://192.168.1.56:10000/project/interface?id=${choicesRes.servers}&sort=0&sbdoctimestamps=1606793605781`).then(getApiForJsByAppNameRes => {
                    writeFileLoading.stop()
                    let appInfo = getAppNamesRes.data.data.public.filter(item=>item._id==choicesRes.servers)[0]
                    const savePath = `./request/${appInfo.name}`
                    const saveExists = fs.existsSync(savePath)
                    if (!saveExists) {
                        fs.mkdirSync(savePath)
                    }
                    // let urlAry = handleAryThre(getApiForJsByAppNameRes.data.data)

                    const exists = fs.existsSync(savePath)
                    if (!exists) {
                        fs.mkdirSync(savePath)
                    } else {
                        if (fs.existsSync(`${savePath}/request.js`))
                            fs.unlinkSync(`${savePath}/request.js`)
                    }
                    let swaggerFile = String(fs.readFileSync(path.join(__dirname, '/../template/api/config.ejs')))
                    let swaggerTemplate = ejs.compile(swaggerFile)
                    let swaggerStr = swaggerTemplate({ serviceId: appInfo.name,date:moment().format('YYYY-MM-DD HH:mm:ss') })

                    fs.writeFileSync(`${savePath}/request.js`, swaggerStr)

                    function handleAry(item) {
                        if (item.data) {
                            for (let i = 0; i < item.data.length; i++) {
                                let tagsItem=item.data[i]
                                if (item.data[i].url) {
                                    let requestFile = String(fs.readFileSync(path.join(__dirname, '/../template/api/croot.ejs')))
                                    let requestTemplate = ejs.compile(requestFile)
                                    let requestStr = requestTemplate({ tags: tagsItem, str: JSON.stringify(tagsItem) })
                                    fs.appendFileSync(`${savePath}/request.js`, requestStr.replace(/&#39;/g,'"'))
                                    console.log(chalk.green(`${tagsItem.name} 生成成功`))
                                } else {
                                    if(tagsItem.name.indexOf('回收')!=-1){
                                        continue;
                                    }
                                    let requestFile = String(fs.readFileSync(path.join(__dirname, '/../template/api/requestHeader.ejs')))
                                    let requestTemplate = ejs.compile(requestFile)
                                    let requestStr = requestTemplate({ tags: tagsItem, str: JSON.stringify(tagsItem) })
                                    fs.appendFileSync(`${savePath}/request.js`, requestStr)
                                    console.log(chalk.green(`${tagsItem.name} 头部信息设置成功`))
                                    handleAry(item.data[i])
                                }
                            }
                            
                        }
                    }
                    handleAry(getApiForJsByAppNameRes.data.data)
                }).catch(error => {
                    const message = '请求文件内容失败'
                    writeFileLoading.stop()
                    console.log(chalk.red(message))
                    throw error
                })
            }).catch(error => {
                const message = '请求接口文档地址失败'
                writeFileLoading.stop()
                console.log(chalk.red(message))
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
