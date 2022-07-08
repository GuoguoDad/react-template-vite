import { AxiosResponse } from 'axios'
import { BaseResponse } from '../response'
import { AxiosInterceptor } from './types'

export const AuthInterceptor: AxiosInterceptor<AxiosResponse<BaseResponse<unknown>>> = [
  // @ts-ignore
  async res => {
    // console.log('res data redirect', res?.data?.redirect);
    // if (res?.data?.redirect) {
    //     // captureMessage('token expired');
    //     // eslint-disable-next-line prefer-promise-reject-errors
    //     return Promise.reject('token expired');
    // }
    return res
  },
  error => {
    // @ts-ignore
    console.warn('axios auth error', error)
    return Promise.reject(error)
  }
]
