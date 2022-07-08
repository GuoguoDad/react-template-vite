import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WorkSpaceState } from './type'

const initialState: WorkSpaceState = {
  menuName: '用户管理',
  subMenuKey: 'user',
  menuKey: 'userlist',
  collapsed: false
}

export const WorkSpaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    bachSetState: (state: WorkSpaceState, action: PayloadAction<{ [key: string]: unknown }>) => {
      const valObj = action.payload
      Object.keys(valObj).forEach(key => (state[key] = valObj[key]))
    }
  }
})

export const { bachSetState } = WorkSpaceSlice.actions
export default WorkSpaceSlice.reducer
