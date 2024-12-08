import path from 'node:path'
import { build } from 'esbuild'
import { scanPlugin } from './scan-plugin'

export async function optimize(root: string): Promise<void> {
  // 1. 确定入口
  const entry = path.resolve(root, 'src/main.tsx')
  // 2. 从入口处扫描依赖
  const deps = new Set<string>()

  await build({
    entryPoints: [entry],
    bundle: true,
    write: false,
    plugins: [scanPlugin(deps)],
  })
  // 3. 预构建依赖
}
