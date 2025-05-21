module.exports = {
  extends: ["eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
    ecmaVersion: 6
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      alias: [['@', './src']],
    },
    'react': {
      version: "18.2.0"
    }
  },
  /*
	 * "off" 或 0    ==>  关闭规则
	 * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
	 * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
	 */
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    "quotes": [2, "single"],
    "semi": [1, "never"],
    "class-methods-use-this": "off",
    "import/no-named-as-default": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": "off",
    "no-param-reassign": "off",
    "no-unused-expressions": "off",
    "jsx-a11y/alt-text": "off",
    "no-shadow": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-use-before-define": "off",
    "react/button-has-type": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "import/order": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "no-nested-ternary": "off",
    "no-console": "off",
    "no-sequences": "off",
    "no-multi-assign": "off",
    "func-names": "off",
    "prefer-destructuring": "off",
    "consistent-return": "off",
    "no-useless-escape": "off",
    "no-new-func": "off",
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "react/display-name": "off",
    "react/prop-types": "off",

    // typeScript (https://typescript-eslint.io/rules)
    "@typescript-eslint/no-unused-vars": "off", // 禁止定义未使用的变量
    "@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
    "@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
    "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
    "@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 @ts-ignore
    "@typescript-eslint/ban-types": "off", // 禁止使用特定类型
    "@typescript-eslint/explicit-function-return-type": "off", // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    "@typescript-eslint/no-var-requires": "off", // 不允许在 import 语句中使用 require 语句
    "@typescript-eslint/no-empty-function": "off", // 禁止空函数
    "@typescript-eslint/no-use-before-define": "off", // 禁止在变量定义之前使用它们
    "@typescript-eslint/ban-ts-comment": "off", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
    "@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
    "@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和类的公共类方法的显式返回和参数类型

    // react (https://github.com/jsx-eslint/eslint-plugin-react)
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-key": "off"
  }
}
