const ora = require('ora')
const inquirer = require('inquirer')
const chalk = require('chalk')
const axios = require('axios')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
const moment = require('moment')

const swaggerTemplatePath = '../template/api/swagger.ejs'

const saveFileName = 'request.js'

const headerConfig = {}

axios.defaults.headers.get['content-type'] = 'application/json;charset=UTF-8'
axios.defaults.headers = {
  ...axios.defaults.headers,
  ...headerConfig,
}

const loadingStart = loadingText => {
  return (writeFileLoading = ora(loadingText || '加载中').start())
}
// const loadingEnd = (loadingText) => {
//     return writeFileLoading = ora(loadingText || '加载中').start()
// }

const init = async config => {
  let configTemplatePath = '../template/api/config.ejs'

  // 保存路径
  const savePathPrefix = config.dir + '/request'
  const isExistsExportApi = fs.existsSync(config.dir + '/.exportApi')
  if (isExistsExportApi) {
    configTemplatePath = config.dir + '/.exportApi'
  }

  let confirmRes = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: '此操作会覆盖 request 的项目下的文件,是否继续?',
    },
  ])

  if (confirmRes.confirm) {
    let inputRes = await inquirer.prompt([
      {
        type: 'input',
        name: 'path',
        message: '请输入swagger接口地址',
      },
    ])
    if (inputRes.path[inputRes.path.length - 1] == '/') {
      inputRes.path = inputRes.path.substring(0, inputRes.path.length - 1)
    }
    const requestPath = inputRes.path + '/swagger-resources'
    const spinner = loadingStart('加载中')
    let getAppNamesRes = await axios.get(requestPath, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'content-type': 'application/json;charset=UTF-8',
      },
      responseType: 'json',
    })
    if (getAppNamesRes.status == 200) {
      spinner.stop()
      let choicesRes = await inquirer.prompt([
        {
          type: 'list',
          name: 'servers',
          message: '请选择 servers 项目',
          choices: getAppNamesRes.data.map((item, index) => {
            return {
              name: item.name,
              value: item.name,
            }
          }),
        },
      ])
      if (choicesRes) {
        const writeFileLoading = loadingStart('写入中')
        // const requestPath = inputRes.path.split('/swagger-ui')[0] + '/v2/api-docs'
        let servers
        if (choicesRes.servers == 'default') {
          servers = ''
        } else {
          servers = choicesRes.servers + '/'
        }
        let getApiForJsByAppNameRes = await axios.get(`${inputRes.path}/${servers}v2/api-docs`)
        if (getApiForJsByAppNameRes.status == 200) {
          const savePrefixExists = fs.existsSync(savePathPrefix)
          if (!savePrefixExists) {
            fs.mkdirSync(savePathPrefix)
          }
          const savePath = `${savePathPrefix}/${choicesRes.servers}`
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
                    requestType: attr,
                  }
                }
              }
            }
          })

          const exists = fs.existsSync(savePath)
          if (!exists) {
            fs.mkdirSync(savePath)
          } else {
            if (fs.existsSync(`${savePath}/${saveFileName}`)) fs.unlinkSync(`${savePath}/${saveFileName}`)
          }

          let swaggerFile = String(fs.readFileSync(path.join(isExistsExportApi ? '' : __dirname, configTemplatePath)))
          let swaggerTemplate = ejs.compile(swaggerFile)
          let swaggerStr = swaggerTemplate({ serviceId: choicesRes.servers, date: moment().format('YYYY-MM-DD HH:mm:ss') })

          fs.writeFileSync(`${savePath}/${saveFileName}`, swaggerStr)

          getApiForJsByAppNameRes.data.tags.map((item, index) => {
            let requestFile = String(fs.readFileSync(path.join(__dirname, swaggerTemplatePath)))
            let requestTemplate = ejs.compile(requestFile)
            let requestStr = requestTemplate({ tags: item, str: JSON.stringify(item) })
            fs.appendFileSync(`${savePath}/${saveFileName}`, requestStr.replace(/&#39;/g, '"'))
            writeFileLoading.stop()
            console.log(chalk.green(`${item.name} 生成成功`))
          })
        } else {
          const message = '请求文件内容失败'
          spinner.stop()
          writeFileLoading.stop()
          console.log(chalk.red(message))
          throw error
        }
      } else {
        const message = '请求接口文档地址失败'
        spinner.stop()
        writeFileLoading.stop()
        console.log(chalk.red(message))
        throw error
      }
    } else {
      const message = 'servers 列表请求失败'
      spinner.stop()
      console.log(chalk.red(message))
    }
  } else {
    spinner.stop()
    throw error
  }
  23
}

module.exports = init

// init()
