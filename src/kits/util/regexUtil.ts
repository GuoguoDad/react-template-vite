/** 手机号码 */
export const mobile = /^1[345789]\d{9}/

/**
 * 小数
 */
export const deci = /(?<!\.)\d+\.\d+$/

/**
 * 密码强度
 * 至少一个大写字母、至少一个小写字母、至少一个数字、至少 8 个字符
 */
export const pwdStrength = /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{8,}/
