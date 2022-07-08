import { combineReducers } from '@reduxjs/toolkit'
import WorkSPaceSlice from '@pages/workspace/slice'

const rootReducer = combineReducers({
  workspace: WorkSPaceSlice
})

export default rootReducer
