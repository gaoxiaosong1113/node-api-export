// 查看某个文件是否存在
export const isExists = path => {
  return fs.existsSync(path)
}
