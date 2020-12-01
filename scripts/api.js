const ora = require('ora')
const inquirer = require('inquirer')
const chalk = require('chalk')
const axios = require('axios')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')

inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: '此操作会覆盖 request 的项目下的文件,是否继续?',
}]).then(confirmRes => {
    if (confirmRes.confirm) {
        const spinner = ora('加载中').start()
        axios.get('http://tools.skong.com/api/generate/getAppNames').then(getAppNamesRes => {
            console.log(getAppNamesRes)
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
                axios.get(`http://tools.skong.com/${choicesRes.servers}/v2/api-docs`).then(getApiForJsByAppNameRes => {
                    const savePath = `./request/${choicesRes.servers}`
                    const saveExists = fs.existsSync(savePath)
                    if (!saveExists) {
                        fs.mkdirSync(savePath)
                    }
                    getApiForJsByAppNameRes.data.tags.map((tagsItem, tagsindex) => {
                        if (!tagsItem.children) {
                            tagsItem.children = {}
                        }
                        // 遍历list
                        for (let pathsAttr in getApiForJsByAppNameRes.data.paths) {
                            // 拿到当前遍历项
                            let pathsItem = getApiForJsByAppNameRes.data.paths[pathsAttr]
                            // 继续遍历
                            // pathsItem为 get  post  等
                            for (let attr in pathsItem) {
                                // 
                                if (pathsItem[attr].tags[0] == tagsItem.name) {
                                    if (!tagsItem.children[pathsAttr]) {
                                        tagsItem.children[pathsAttr] = {}
                                    }
                                    tagsItem.children[pathsAttr][attr] = {
                                        ...pathsItem[attr],
                                        requestType: attr
                                    }
                                }
                            }
                        }
                    })

                    const exists = fs.existsSync(savePath)
                    if (!exists) {
                        fs.mkdirSync(savePath)
                    } else {
                        if (fs.existsSync(`${savePath}/request.js`))
                            fs.unlinkSync(`${savePath}/request.js`)
                    }

                    let swaggerFile = String(fs.readFileSync(path.join(__dirname),  '../template/api/config.ejs'))
                    let swaggerTemplate = ejs.compile(swaggerFile)
                    let swaggerStr = swaggerTemplate({ serviceId: choicesRes.servers,date:moment().format('YYYY-MM-DD HH:mm:ss') })

                    fs.writeFileSync(`${savePath}/request.js`, swaggerStr)

                    getApiForJsByAppNameRes.data.tags.map((item, index) => {
                        let requestFile = String(fs.readFileSync(path.join(__dirname),  '../template/api/swagger.ejs'))
                        let requestTemplate = ejs.compile(requestFile)
                        let requestStr = requestTemplate({ tags: item, str: JSON.stringify(item) })
                        fs.appendFileSync(`${path}/request.js`, requestStr.replace(/&#39;/g,'"'))
                        writeFileLoading.stop()
                        console.log(chalk.green(`${item.name} 生成成功`))
                    })

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
