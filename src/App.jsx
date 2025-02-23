import React from 'react'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Profile from './components/Profile'
import Guard from './utils/Guard'
import AdminGuard from './utils/AdminGuard'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<AdminGuard><Dashboard/></AdminGuard>}/>
        <Route path='/profile' element={<Guard><Profile/></Guard>}/>
        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App