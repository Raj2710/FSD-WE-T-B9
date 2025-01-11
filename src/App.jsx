import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Dashboard from './components/Dashboard'
import Create from './components/Create'
import Profile from './components/Profile'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
function App() {
  return <> 
  <div id="wrapper">

    <Sidebar/>
    <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
            <div class="container-fluid">
                <Routes>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/create' element={<Create/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path="*" element={<Navigate to='/dashboard'/>}/>
                </Routes>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default App