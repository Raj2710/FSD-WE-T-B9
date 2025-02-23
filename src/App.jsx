import React from 'react'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App