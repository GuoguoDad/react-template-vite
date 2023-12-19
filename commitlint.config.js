const checkType = (header) => {
  header = `${header}`;
  const enumType = ['feat', 'fix', 'style', 'chore', 'test', 'ci', 'refactor', 'revert', 'reformat', 'docs', 'perf'];
  const realType = header.split(':')[0];
  return enumType.includes(realType);
};

const checkSubject = (header) => {
  header = `${header}`;
  const realSubject = header.split(':')[1];
  if (!realSubject) {
    return false;
  }
  return realSubject.length > 0;
};


/*
 * @Description: commit-msg提交信息格式规范
 *
 * commit-msg格式: <type>: <subject>
 *     - chore: 其他修改, 比如改变构建流程、或者增加依赖库、工具等
 *     - ci: 持续集成修改
 *     - docs: 文档修改
 *     - feat: 新特性、新功能
 *     - fix: 修改bug
 *     - perf: 优化相关，比如提升性能、体验
 *     - refactor: 代码重构
 *     - revert: 回滚到上一个版本
 *     - style: 代码格式修改, 注意不是 css 修改
 *     - test: 测试用例修改
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum-rule': [2, 'never'],
    'subject-enum-rule': [2, 'never'],
    'type-enum': [0, 'never'],
    'type-empty': [0, 'always'],
    'subject-empty': [0, 'always'],
  },
  plugins: [
    {
      rules: {
        'type-enum-rule': ({ header }) => {
          return [
            checkType(header),
            '需要包含提交类型，格式如: "feat: 开发新功能" 中的feat, ' +
            '可选值有: feat/fix/style/test/chore/ci/..., 类型后面紧跟英文冒号分隔主题信息',
          ];
        },
        'subject-enum-rule': ({ header }) => {
          return [checkSubject(header), '需要包含提交主题, 格式如: "feat: 开发新功能" 中的 开发新功能'];
        },
      },
    },
  ],
};
