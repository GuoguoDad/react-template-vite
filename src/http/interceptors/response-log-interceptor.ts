import { AxiosResponse } from 'axios'
import { BaseResponse } from '../response'
import { AxiosInterceptor } from './types'

export const ResponseLogInterceptor: AxiosInterceptor<AxiosResponse<BaseResponse<any>>> = [
  // @ts-ignore
  res => {
    console.log(`axios request url is ${res.config.url}`)
    console.log('axios request Data is', res.config.data)
    console.log('axios response', res)

    return res
  },
  error => {
    if (error.request) {
      console.warn('.....................................................')
      console.warn('axios response interceptor error and url is', error.request.responseURL)
      console.warn('axios response interceptor error and error is', error)
      console.warn('.....................................................')
    }
    return Promise.reject(error)
  }
]
