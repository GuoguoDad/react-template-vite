import React from 'react'
import { Spin } from 'antd'
import { useLocation } from 'react-router-dom'
import { useHasPermission } from './hooks'
import Error403 from '@pages/error403'

const CheckPermission: React.FC<{ children: React.ReactNode }> = props => {
  const location = useLocation()
  const { isLoading, hasPermission } = useHasPermission(location.pathname)

  return (
    <>
      {isLoading ? (
        <Spin
          size="large"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        />
      ) : hasPermission() ? (
        props.children
      ) : (
        <Error403 />
      )}
    </>
  )
}

export default CheckPermission
