import React from 'react'
import { Navigate } from 'react-router-dom'

const CheckLogin: React.FC<{ children: React.ReactNode }> = props => {
  const isLogin = true
  return <>{isLogin ? props.children : <Navigate to={'/login'} replace={true} />}</>
}

export default CheckLogin
