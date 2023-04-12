## 创建项目
```
npm init vite@latest vite-react-app -- --template react
```

## 安装依赖
```
npm i react-router react-router-dom antd redux redux-react @reduxjs/toolkit -S
```

## vite配置

```
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import legacy from '@vitejs/plugin-legacy'
import eslintPlugin from 'vite-plugin-eslint'
import { viteMockServe } from 'vite-plugin-mock'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'
import * as path from 'path'
import { wrapperEnv } from './src/kits/util/getEnv'

// https://vitejs.dev/config/
export default defineConfig( (mode: ConfigEnv): UserConfig => {
  const localEnabled = (process.env.useMock as unknown as boolean) || false
  const env = loadEnv(process.env.appEnv!, process.cwd(), 'APP_');
  const viteEnv = wrapperEnv(env)

  return  {
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
```



<font color=red>注意：这里虽然用createStyleImportPlugin配置了AntdResolve， 但是antd依然样式有问题</font>

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8955652a922146adae72f1a9a6055cb5~tplv-k3u1fbpfcp-watermark.image?)
<font color=green>解决办法：</font>

```javascript
'~antd': path.resolve(__dirname, './node_modules/antd')
```


## husky + lint-staged + prettier 配置

```javascript
1、npx husky install

2、npx husky add .husky/pre-commit "yarn lint-staged --allow-empty"

3、 pageckage.json 中增加

"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write --loglevel warn"
  ],
  "src/**/*.{less,postcss,css,scss}": [
    "stylelint --fix --custom-syntax postcss-less --cache --cache-location node_modules/.cache/stylelint/"
  ]
}
```

## 效果

![iShot_2022-07-25_17.02.18.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/85c99d3441e745aab9c88df0fee6911e~tplv-k3u1fbpfcp-watermark.image?)

![iShot_2022-07-25_17.02.37.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/210f0077228b419a8b75baff68b5f440~tplv-k3u1fbpfcp-watermark.image?)
