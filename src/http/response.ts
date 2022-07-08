export interface BaseResponse<T> {
  code: number
  data: T
  msg: string
}
export interface SuccessResponse<T> extends BaseResponse<T> {
  success: true
  data: T
}
// @ts-ignore
export interface FailedResponse extends BaseResponse<null> {
  success: false
  obj: null
  data: null
}

export type PageData<T> = {
  pageSize: number

  totalPageCount: number

  totalCount: number

  dataList: T[]
}
