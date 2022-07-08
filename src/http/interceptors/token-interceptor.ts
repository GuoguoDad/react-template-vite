import { AxiosRequsetInterceptor } from './types'

export const TokenInjectRequestInterceptor: AxiosRequsetInterceptor = [
  async req => {
    // const token = await UserInfoStorage.getParsedData();

    // if (token) {
    //     // eslint-disable-next-line @typescript-eslint/camelcase
    //     const { _u_id, _h_id, _aj_token, jwt } = token;
    //     // eslint-disable-next-line @typescript-eslint/camelcase
    //     req.headers['x-bifrost-u-id'] = _u_id;
    //     // eslint-disable-next-line @typescript-eslint/camelcase
    //     req.headers['x-bifrost-h-id'] = _h_id;
    //     // eslint-disable-next-line @typescript-eslint/camelcase
    //     req.headers['x-bifrost-aj-token'] = _aj_token;
    //     req.headers['x-bifrost-jwt'] = jwt;
    // }
    return req
  },
  error => {
    // @ts-ignore
    // eslint-disable-next-line no-console
    console.warn('axios token error', error)
    return Promise.reject(error)
  }
]
