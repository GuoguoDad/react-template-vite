export function wrapperEnv(envConf: Recordable): GlobalEnv {
  const ret: any = {}

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    if (envName === 'APP_HOST_PORT') {
      realName = Number(realName)
    }

    ret[envName] = realName
    process.env[envName] = realName
  }
  return ret
}
