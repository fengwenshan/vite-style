import type { Plugin } from 'esbuild'
export function scanPlugin(dep: Set<string>): Plugin {
  return {
    name: 'esbuild:scan-deps',
    setup(build) {
      console.log(build, dep)
    },
  }
}
