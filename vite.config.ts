import { defineConfig, loadEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import legacy from '@vitejs/plugin-legacy'
import eslintPlugin from 'vite-plugin-eslint'
import { viteMockServe } from 'vite-plugin-mock'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'
import progress from 'vite-plugin-progress'
import colors from 'picocolors'
import * as path from 'path'
import { wrapperEnv } from './src/kits/util/getEnv'

// https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
  const mockEnabled = (process.env.useMock as unknown as boolean) || false
  const env = loadEnv(process.env.appEnv!, process.cwd(), 'APP_')
  const viteEnv = wrapperEnv(env)

  return {
    plugins: [
      react(),
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      checker({
        typescript: true
      }),
      createHtmlPlugin({
        entry: './src/index.tsx',
        inject: {
          data: {
            title: viteEnv.APP_DOCUMENT_TITLE
          }
        }
      }),
      eslintPlugin(),
      createStyleImportPlugin({
        resolves: [AntdResolve()]
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: mockEnabled,
        watchFiles: true,
        logger: true
      }),
      progress({
        format: `${colors.green(colors.bold('Building'))} ${colors.cyan('[:bar]')} :percent`
      })
    ],
    resolve: {
      alias: {
        '@pages': path.resolve(__dirname, './src/pages'),
        '@comps': path.resolve(__dirname, './src/components'),
        '@http': path.resolve(__dirname, './src/http/fetch'),
        '@img': path.resolve(__dirname, './src/assets/images'),
        '@kits': path.resolve(__dirname, './src/kits'),
        '@router': path.resolve(__dirname, './src/router'),
        '@store': path.resolve(__dirname, './src/store')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#4377FE' //设置antd主题色
          }
        }
      }
    },
    envPrefix: 'APP_',
    server: {
      port: 3000,
      open: 'http://localhost:3000/system/userList',
      cors: true,
      proxy: {
        // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
        '/foo': 'http://localhost:4567',
        // with RegExp: http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
        '^/fallback/.*': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/fallback/, '')
        }
      }
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  }
})
