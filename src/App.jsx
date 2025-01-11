import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Dashboard from './components/Dashboard'
import Create from './components/Create'
import Profile from './components/Profile'
import NestedExample from './components/NestedExample'
import Sidebar from './components/Sidebar'
import Inbound from './components/NestedExample/Inbound'
import Outbound from './components/NestedExample/Outbound'
import Summary from './components/NestedExample/Summary'
import Reports from './components/NestedExample/Reports'

function App() {
  return <> 
  <div id="wrapper">

    <Sidebar/>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
                <Routes>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/create' element={<Create/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/nested-example' element={<NestedExample/>}>
                      <Route path='summary' element={<Summary/>}/>
                      <Route path='inbound' element={<Inbound/>}/>
                      <Route path='outbound' element={<Outbound/>}/>
                      <Route path='reports' element={<Reports/>}/>
                      <Route path='' element={<Navigate to='summary'/>}/>
                    </Route>
                    <Route path="*" element={<Navigate to='/dashboard'/>}/>
                </Routes>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default App