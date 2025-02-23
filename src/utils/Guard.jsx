import React from 'react'
import { Navigate } from 'react-router'
function Guard({children}) {
    let token = sessionStorage.getItem('token')
  return <>
  {
    token ? children : <Navigate to='/login'/>
    }</>
}

export default Guard