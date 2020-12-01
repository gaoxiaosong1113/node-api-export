

const ora = require('ora')
const inquirer = require('inquirer')
const chalk = require('chalk')
const axios = require('axios')
const fs = require('fs')

const ejs = require('ejs')


const path = require('path')

const argvs = process.argv

// 创建那个类型的模板
const type = ''
// 创建的模板名称
const name = ''

const reg = /Template/g
const miReg = /template/g

const _path = __dirname

// 将模板名称转化为首字母大写
let fileName = ''

const options = {
	router: {
		path: `${_path}/../../src/pages/`,
		tempPath: `${_path}/router.temp/`,
	},
	components: {
		path: `${_path}/../../src/skComponents/components/`,
		tempPath: `${_path}/components.temp/`,
		index: `${_path}/../../src/skComponents/index.js`,
	},
	pageList: {
		path: `${_path}/../../src/pages/`,
		tempPath: `${_path}/pageList.temp/`,
	},
}


// 构建器
function generate(tempDir, genPath) {
	mkdir(genPath)
	const files = fs.readdirSync(tempDir)
	files.forEach((file) => {
		const stat = fs.statSync(tempDir + file)
		if (stat.isFile()) {
			let content = fs.readFileSync(tempDir + file).toString()
			content = content.replace(reg, fileName).replace(miReg, fileName.toLowerCase())
			const suffix = file.substr(file.indexOf('.'), file.length)
			let filename
			if (reg.test(file))
				filename = fileName + suffix
			else if (miReg.test(file))
				filename = fileName.toLowerCase() + suffix
			else
				filename = file
			mkfile(genPath + filename, content)
		} else if (stat.isDirectory()) {
			const dir = `${genPath + file}/`
			mkdir(dir)
			generate(`${tempDir + file}/`, dir)
		}
	})
}

// 重新index文件
function writeFile(t) {
	const fileIndexPath = options[t].index
	const isFile = fs.statSync(fileIndexPath)
	// if (t === 'router') {
	// 	const indexContents = isFile ? fs.readFileSync(fileIndexPath).toString() : ''
	// 	const c = indexContents.split('// 页面结束')
	// 	c.splice(1, 0, `import ${name} from './${name}'\n// 页面结束`)
	// 	fs.writeFileSync(fileIndexPath, c.join(''))
	// }
	const indexContents = isFile ? fs.readFileSync(fileIndexPath).toString() : ''
	let c = indexContents.split('// 组件结束')
	c.splice(1, 0, `import ${name} from './${name}'\n// 组件结束`)
	c = c.join('')
	c = c.split('}\n')
	c.splice(1, 0, `\t${name},\n}\n`)
	fs.writeFileSync(fileIndexPath, c.join(''))
}

// 创建路径
function mkdir(dir) {
	dir = path.normalize(dir)
	console.info(`make folder, path:${dir}`)
	fs.existsSync(dir) || fs.mkdirSync(dir)
}

// 创建文件
function mkfile(dir, content) {
	dir = path.normalize(dir)
	console.info(`make folder, path:${dir}`)
	fs.writeFileSync(dir, content)
}


// 提示用户执行命令的风险
inquirer.prompt([{
	type: 'confirm',
	name: 'confirm',
	message: '此操作会创建相应的模板,是否继续?',
}]).then(confirmRes => {
	if (confirmRes.confirm) {
		// 列出创建的模板类型
		inquirer.prompt([{
			type: 'list',
			name: 'type',
			message: '请选择应用名称',
			choices: [
				{
					name: 'router',
					value: 'router',
				},
				{
					name: 'components',
					value: 'components',
				},
				{
					name: 'pageList',
					value: 'pageList',
				},
			]
		}]).then(choicesTypeRes => {
			const { type } = choicesTypeRes
			inquirer.prompt([{
				type: 'input',
				name: 'name',
				message: '请输入创建模块名称',
			}]).then(inputRes => {
				const { name } = inputRes
				if (type != 'pageList') {
					// 将模板名称转化为首字母大写
					fileName = name.substr(0, 1).toUpperCase() + name.substr(1)
					const tDir = options[type].tempPath
					const gPath = `${options[type].path + fileName}/`
					generate(tDir, gPath)
				} else {
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
							const writeFileLoading = ora('写入中').start();
							axios.get(`http://tools.skong.com/${choicesRes.servers}/v2/api-docs`).then(getApiForJsByAppNameRes => {
								writeFileLoading.stop();
								const savePath = `./template/requestInfo/${choicesRes.servers}`
								const saveExists = fs.existsSync(savePath)
								if (!saveExists) {
									fs.mkdirSync(savePath)
								}
								getApiForJsByAppNameRes.data.tags.map((tagsItem) => {
									if (!tagsItem.children) {
										tagsItem.children = {}
									}
									for (const pathsAttr in getApiForJsByAppNameRes.data.paths) {
										const pathsItem = getApiForJsByAppNameRes.data.paths[pathsAttr]
										for (const attr in pathsItem) {
											if (pathsItem[attr].tags[0] == tagsItem.name) {
												tagsItem.children[pathsAttr] = {
													...pathsItem[attr],
													requestType: attr
												}
											}
										}
									}
								})
								getApiForJsByAppNameRes.data.tags.map((item) => {
									const saveApiPath = `${savePath}/${item.name}`
									const exists = fs.existsSync(saveApiPath)
									if (!exists) {
										fs.mkdirSync(saveApiPath)
									}
									const modelsFile = String(fs.readFileSync(`${__dirname}/../../scripts/models.ejs`))
									const requestFile = String(fs.readFileSync(`${__dirname}/../../scripts/request.ejs`))
									const modelsTemplate = ejs.compile(modelsFile)
									const requestTemplate = ejs.compile(requestFile)
									const modelsStr = modelsTemplate({ tags: item, str: JSON.stringify(item) })
									const requestStr = requestTemplate({ tags: item, str: JSON.stringify(item) })
									fs.writeFileSync(`${saveApiPath}/models.js`, modelsStr)
									fs.writeFileSync(`${saveApiPath}/request.js`, requestStr)
								})

								inquirer.prompt([{
									type: 'list',
									name: 'api',
									message: '请选择 api 模块',
									choices: getApiForJsByAppNameRes.data.tags.map((item, index) => {
										return {
											name: item.name,
											value: item.name,
										}
									})
								}]).then(apiChoicesRes => {
									const loadApiPath = `${savePath}/${apiChoicesRes.api}`
									// 将模板名称转化为首字母大写
									fileName = name.substr(0, 1).toUpperCase() + name.substr(1)
									const tDir = options[type].tempPath
									const gPath = `${options[type].path + fileName}/`
									generate(tDir, gPath)
									fs.copyFileSync(`${loadApiPath}/models.js`,`${gPath}/models/index.ts`)
									fs.copyFileSync(`${loadApiPath}/request.js`, `${gPath}/request.tsx`)
									console.log(chalk.green(`生成成功`))
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
			})
		})
	}
}).catch(error => {
	throw error
})



