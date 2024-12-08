import { cac } from 'cac'
import { createServer } from './server'

const cli = cac('ws-vite')

cli
  .option('-c, --config <file>', `[string] use specified config file`)
  .option('-m, --mode <mode>', `[string] set env mode`)

cli
  .command('[root]', 'start dev server')
  .alias('serve')
  .alias('dev')
  .option('--host [host]', `[string] specify hostname`, { type: ['./'] })
  .option('--port <port>', `[number] specify port`)
  .option('--open [path]', `[boolean | string] open browser on startup`)
  .option('--cors', `[boolean] enable CORS`)
  .option('-c, --config <file>', `[string] use specified config file`)
  .action(async () => {
    createServer()
  })

cli.help()
cli.parse()
