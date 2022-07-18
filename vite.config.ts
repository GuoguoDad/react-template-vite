import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import legacy from '@vitejs/plugin-legacy'
import { viteMockServe } from 'vite-plugin-mock'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'
import * as path from 'path'
import { wrapperEnv } from './src/kits/util/getEnv'

// https://vitejs.dev/config/
export default defineConfig( (mode: ConfigEnv): UserConfig => {
  const localEnabled = (process.env.useMock as unknown as boolean) || false
 const env = loadEnv(process.env.appEnv!, process.cwd(), 'APP_');
  wrapperEnv(env)

  return  {
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      react(),
      checker({
        typescript: true
      }),
      createStyleImportPlugin({
        resolves: [AntdResolve()]
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled,
        prodEnabled: false,
        watchFiles: true
      })
    ],
    resolve: {
      alias: {
        '~antd': path.resolve(__dirname, './node_modules/antd'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@comps': path.resolve(__dirname, './src/components'),
        '@http': path.resolve(__dirname, './src/http/fetch'),
        '@img': path.resolve(__dirname, './src/assets/images'),
        '@kits': path.resolve(__dirname, './src/kits'),
        '@store': path.resolve(__dirname, './src/store')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#4377FE',//设置antd主题色
          }
        }
      }
    },
    envPrefix: 'APP_',
    server: {
      port: 3000,
      open: 'http://127.0.0.1:3000/#/user/list',
      cors: true
    },
    build: {
      outDir: "dist",
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  }
})
