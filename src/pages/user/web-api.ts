import Fetch from '@http'
import { PageData } from '../../http/response'
import { UserDto } from './type'

export const queryUserList = async () => {
  const { data } = await Fetch.get<PageData<UserDto>>('http://localhost:3000/user/list')
  return data
}
