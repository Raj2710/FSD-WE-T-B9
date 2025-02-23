import React from 'react'
import { useNavigate } from 'react-router'
function useLogout() {

  let navigate = useNavigate()
  
  return ()=>{
    sessionStorage.clear()
    navigate('/login')
  }
}

export default useLogout