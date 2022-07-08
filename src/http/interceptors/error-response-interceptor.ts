import { AxiosResponse } from 'axios'
import { AxiosInterceptor } from './types'
import { BaseResponse } from '../response'

export const ErrorResponseInterceptor: AxiosInterceptor<AxiosResponse<BaseResponse<any>>> = [
  // @ts-ignore
  res => {
    // eslint-disable-next-line eqeqeq
    if (res.data?.code != 0) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('___________request error_______________')
        console.warn(`${res.config.url} request error ${res.data.msg}`)
        console.warn('___________request error_______________')
      }
      console.log(res?.data?.msg ?? '服务异常,请稍后重试!')

      return Promise.reject(res.data.msg)
    }
    return res
  },
  err => {
    if (err?.message && err.message === 'Network Error') {
      console.log('网络异常')
    }
    return Promise.reject(err)
  }
]
