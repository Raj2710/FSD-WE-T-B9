import { useState,useEffect,useRef } from 'react'
import UseRefBasic from './components/UseRefBasic'
import UseRefOTP from './components/UseRefOTP'
import UseReducerExample from './components/UseReducerExample'
import UseMemoExample from './components/UseMemoExample'
import UseCallBackExample from './components/UseCallBackExample'
function App() {
  return (
    <>
      <UseRefBasic/>
      <UseRefOTP/>
      <UseReducerExample/>
      <UseMemoExample/>
      <UseCallBackExample/>
    </>
  )
}

export default App
