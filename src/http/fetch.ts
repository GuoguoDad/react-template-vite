import axios, { AxiosRequestConfig } from 'axios'
import { BaseResponse } from './response'
import { ResponseLogInterceptor } from './interceptors/response-log-interceptor'
import { AuthInterceptor } from './interceptors/auth-intereceptor'
import { ErrorResponseInterceptor } from './interceptors/error-response-interceptor'
import { TokenInjectRequestInterceptor } from './interceptors/token-interceptor'

const instance = axios.create()
// @ts-ignore
instance.defaults.headers['Content-Type'] = 'application/json'
// @ts-ignore
instance.defaults.headers.Accept = 'application/json'

if (process.env.NODE_ENV === 'development') {
  instance.interceptors.response.use(...ResponseLogInterceptor)
}
instance.interceptors.response.use(...AuthInterceptor)
instance.interceptors.response.use(...ErrorResponseInterceptor)
instance.interceptors.request.use(...TokenInjectRequestInterceptor)

const Fetch = {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => {
    return instance.get<BaseResponse<T>>(url, { ...config }).then(res => res.data)
  },
  post: <T = any>(url: string, data: any = {}, config?: AxiosRequestConfig) => {
    return instance.post<BaseResponse<T>>(url, data, { ...config }).then(res => res.data)
  },
  request: <T = any>(config: AxiosRequestConfig) => instance.request<BaseResponse<T>>({ ...config })
}

export default Fetch
