const ora = require('ora')
const inquirer = require('inquirer')
const chalk = require('chalk')
const axios = require('axios')
const fs = require('fs')
const ejs = require('ejs')


inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: '此操作会覆盖选择的 template 项目下的文件,是否继续?',
}]).then(confirmRes => {
    if (confirmRes.confirm) {
        const spinner = ora('加载中').start()
        axios.get('http://tools.skong.com/swagger-resources').then(getAppNamesRes => {
            spinner.stop()
            inquirer.prompt([{
                type: 'list',
                name: 'servers',
                message: '请选择 servers 项目',
                choices: getAppNamesRes.data.map((item, index) => {
                    return {
                        name: item.name,
                        value: item.name,
                    }
                })
            }]).then(choicesRes => {
                const writeFileLoading = ora('写入中').start()
                axios.get(`http://tools.skong.com/${choicesRes.servers}/v2/api-docs`).then(getApiForJsByAppNameRes => {
                    const savePath = `./template/requestInfo/${choicesRes.servers}`
                    const saveExists = fs.existsSync(savePath)
                    if (!saveExists) {
                        fs.mkdirSync(savePath)
                    }
                    getApiForJsByAppNameRes.data.tags.map((tagsItem, tagsindex) => {
                        if (!tagsItem.children) {
                            tagsItem.children = {}
                        }
                        for (let pathsAttr in getApiForJsByAppNameRes.data.paths) {
                            let pathsItem = getApiForJsByAppNameRes.data.paths[pathsAttr]
                            for (let attr in pathsItem) {
                                if (pathsItem[attr].tags[0] == tagsItem.name) {
                                    tagsItem.children[pathsAttr] = {
                                        ...pathsItem[attr],
                                        requestType: attr
                                    }
                                }
                            }
                        }
                    })
                    getApiForJsByAppNameRes.data.tags.map((item, index) => {

                        const path = `${savePath}/${item.name}`
                        const exists = fs.existsSync(path)
                        if (!exists) {
                            fs.mkdirSync(path)
                        }
                        let modelsFile = String(fs.readFileSync(__dirname + '/./models.ejs'))
                        let requestFile = String(fs.readFileSync(__dirname + '/./request.ejs'))
                        let modelsTemplate = ejs.compile(modelsFile)
                        let requestTemplate = ejs.compile(requestFile)
                        let modelsStr = modelsTemplate({ tags: item, str: JSON.stringify(item) })
                        let requestStr = requestTemplate({ tags: item, str: JSON.stringify(item)  })
                        fs.writeFileSync(`${path}/models.js`, modelsStr)
                        fs.writeFileSync(`${path}/request.js`, requestStr)
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
