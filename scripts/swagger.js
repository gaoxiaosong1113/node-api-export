const ora = require('ora')
const inquirer = require('inquirer')
const chalk = require('chalk')
const axios = require('axios')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
const moment = require('moment')

let exportapirc
let exportapircPath = process.cwd() + '/.exportapirc.js'
// exportr-api 配置文件
if (fs.existsSync(exportapircPath)) {
  exportapirc = require(exportapircPath)
}

// swagger模板
const swaggerTemplatePath = '../template/api/swagger.ejs'

// 保存的文件名
const saveFileName = 'request.js'

const headerConfig = {}

axios.defaults.headers.get['content-type'] = 'application/json;charset=UTF-8'
axios.defaults.headers = {
  ...axios.defaults.headers,
  ...headerConfig,
}

/**
 * loading
 * @param { String } loadingText
 * @return {*}
 */
const loadingStart = loadingText => {
  return ora(loadingText || '加载中').start()
}

// 验证url格式
var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
var objExp = new RegExp(Expression)

// 主入口
const init = async config => {
  // 头部模板
  let configTemplatePath = '../template/api/config.ejs'

  // 保存路径
  const savePathPrefix = config.dir + '/request'

  // 判断是否有自定义模板配置
  const isExistsExportApi = fs.existsSync(config.dir + '/.exportapi')
  if (isExistsExportApi) {
    configTemplatePath = config.dir + '/.exportapi'
  }

  // step1: 操作提示
  let confirmRes = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: '此操作会覆盖 request 的项目下的文件,是否继续?',
    },
  ])

  if (confirmRes.confirm) {
    // 保存路径
    let inputRes = {
      path: '',
    }
    // 如果有有配置文件使用配置文件的url
    if (exportapirc && exportapirc.swaggerUrl) {
      inputRes.path = exportapirc.swaggerUrl
    } else {
      // step2: 输入文件地址
      inputRes = await inquirer.prompt([
        {
          type: 'input',
          name: 'path',
          message: '请输入swagger接口地址',
        },
      ])
    }

    // 校验url格式
    if (objExp.test(inputRes.path) == false) {
      console.log(chalk.red('请输入合法url地址'))
      throw new Error('请输入合法url地址')
    }

    // 去除url最后面的 /
    if (inputRes.path[inputRes.path.length - 1] == '/') {
      inputRes.path = inputRes.path.substring(0, inputRes.path.length - 1)
    }

    // 请求地址
    const requestPath = inputRes.path + '/swagger-resources'

    // loading
    const spinner = loadingStart('加载中')

    // 请求api分类列表
    let getAppNamesRes = await axios.get(requestPath, {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      responseType: 'json',
    })
    spinner.stop()
    if (getAppNamesRes.status != 200) {
      console.log(chalk.red('servers 列表请求失败'))
      throw error
    }
    if (getAppNamesRes.status == 200) {
      // step3：选择分类
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

      const writeFileLoading = loadingStart('写入中')

      // 优化url结构
      let servers = choicesRes.servers == 'default' ? '' : choicesRes.servers + '/'
      // 分类api列表
      let getApiForJsByAppNameRes = await axios.get(`${inputRes.path}/${servers}v2/api-docs`)

      // 关闭loading
      writeFileLoading.stop()
      if (getApiForJsByAppNameRes.status != 200) {
        writeFileLoading.stop()
        console.log(chalk.red('请求文件内容失败'))
        throw error
      }
      console.log('———————— export start ——————————')
      if (getApiForJsByAppNameRes.status == 200) {
        // 判断是否有已导出的目录
        const savePrefixExists = fs.existsSync(savePathPrefix)
        // 没有则创建
        !savePrefixExists ? fs.mkdirSync(savePathPrefix) : null
        // 判断是否有已导出的分类文件
        const savePath = `${savePathPrefix}/${choicesRes.servers}`
        // 没有则创建
        !fs.existsSync(savePath) ? fs.mkdirSync(savePath) : null

        // 处理swagger数据
        getApiForJsByAppNameRes.data.tags.map((tagsItem, tagsindex) => {
          !tagsItem.children ? (tagsItem.children = {}) : null
          // 遍历list
          for (let pathsAttr in getApiForJsByAppNameRes.data.paths) {
            // 拿到当前遍历项
            let pathsItem = getApiForJsByAppNameRes.data.paths[pathsAttr]
            // 继续遍历
            // pathsItem为 get  post  等
            for (let attr in pathsItem) {
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

        let filePath = `${savePath}/${saveFileName}`

        // 如果已存在，则删除
        fs.existsSync(filePath) ? fs.unlinkSync(filePath) : null

        // 将内容填入文件
        fs.writeFileSync(filePath, ejs.compile(String(fs.readFileSync(path.join(isExistsExportApi ? '' : __dirname, configTemplatePath))))({ serviceId: choicesRes.servers, date: moment().format('YYYY-MM-DD HH:mm:ss') }))

        // 遍历api
        getApiForJsByAppNameRes.data.tags.map((item, index) => {
          // 将内容填入文件



          fs.appendFileSync(
            filePath,
            ejs
              .compile(String(fs.readFileSync(path.join(__dirname, swaggerTemplatePath))))({ tags: item, str: JSON.stringify(item) })
              .replace(/&#39;/g, '"')
          )
          // 关闭loading
          console.log(chalk.green(`export (${item.name}) api SUCCESS`))
        })
        console.log('———————— export end ——————————')
      }
    }
  }
}

module.exports = init
