// import chokidar from 'chokidar'
import connect from 'connect'
import { optimize } from '../optimizer'

export function _createServer(): void {
  const app = connect()
  // 谁的工程下启动就是谁
  const root = process.cwd()
  console.log(root)
  const startTime = Date.now()
  app.listen(3000, () => {
    optimize(root)
    console.log(
      `no-bundle 服务已经成功启动，耗时：${Date.now() - startTime} ms`,
    )
    console.log(`本地访问路径：http://localhost:3000`)
  })
}
export function createServer(): void {
  _createServer()
}
