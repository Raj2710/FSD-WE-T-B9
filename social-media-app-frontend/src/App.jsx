import React from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Guard from './utils/Guard'
import Signup from './components/Signup'
import Feeds from './components/Feeds'
import AdminGuard from './utils/AdminGuard'
import AllUsers from './components/users/AllUsers'
import CreateBlog from './components/blogs/CreateBlog'
import ViewBlog from './components/blogs/ViewBlog'
import MyBlogs from './components/blogs/MyBlogs'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router'
function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Guard><Dashboard/></Guard>}/>
        <Route path='/feeds' element={<Guard><Feeds/></Guard>}/>
        <Route path='/users' element={<AdminGuard><AllUsers/></AdminGuard>}/>
        <Route path='/blogs' element={<Guard><MyBlogs/></Guard>}/>
        <Route path='/blogs/create' element={<Guard><CreateBlog/></Guard>}/>
        <Route path='/blogs/:id' element={<Guard><ViewBlog/></Guard>}/>

        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App