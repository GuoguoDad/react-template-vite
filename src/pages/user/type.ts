export type UserDto = {
  id: string
  name: string
  deptName: string
}

export interface UserState {
  data: Array<UserDto>
  selectedRowKeys: Array<any>
  loading: boolean
  total: number
  currentPage: number
  pageSize: number
  showAddForm: boolean
}
