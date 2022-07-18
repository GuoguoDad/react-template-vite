import Fetch from '@http'
import { PageData } from '../../http/response'
import { UserDto } from './type'

export const queryUserList = async () => {
  const { data } = await Fetch.get<PageData<UserDto>>(`${import.meta.env.APP_HOST_API}:${import.meta.env.APP_HOST_PORT}/user/list`)
  return data
}
