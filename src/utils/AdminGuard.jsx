import React from 'react'
import { Navigate } from 'react-router'
function AdminGuard({children}) {
    let token = sessionStorage.getItem('token')
    let role = sessionStorage.getItem('role')
  return <>
  {
    token && role === 'ADMIN' ? children : <Navigate to='/login'/>
    }</>
}

export default AdminGuard