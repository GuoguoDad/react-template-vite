/**
 * 权限检测当前用户是否有某个权限
 * @param permissionKey 权限 key
 */
export const useHasPermission = (permissionKey: string | string[]) => {
  // const { data, isLoading } = useGetAccountPermissionsQuery()
  //
  const isLoading = false
  const hasPermission = (): boolean => {
    if (isLoading) {
      return false
    }
    // if (Array.isArray(permissionKey)) {
    //   for (const key of permissionKey) {
    //     if (data!.permissions.includes(key)) {
    //       return false
    //     }
    //   }
    //   return true
    // }
    // return data!.permissions.includes(permissionKey)
    return true
  }
  return { isLoading: false, hasPermission }
}
