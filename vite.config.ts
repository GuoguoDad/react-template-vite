import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'
import * as path from 'path'

const localEnabled = (process.env.use_mock as unknown as boolean) || false

// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.mode,
  plugins: [
    react(),
    createStyleImportPlugin({ resolves: [AntdResolve()]}),
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
  build: {

  }
})
