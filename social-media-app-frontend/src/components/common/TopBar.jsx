import React from 'react'
import { Link,useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useLogout from '../../hooks/useLogout';

function TopBar() {

  const location = useLocation()
  const logout = useLogout()
  const role = sessionStorage.getItem('role')
  const name = sessionStorage.getItem('name')
  
  const options = [
    {
      id:1,
      path:'/dashboard',
      label:'Dashboard',
      role:['ADMIN','SUPER_ADMIN']
    },
    {
      id:2,
      path:'/feeds',
      label:'Feeds',
      role:['ADMIN','USER','SUPER_ADMIN']
    },
    {
      id:3,
      path:'/users',
      label:'User Management',
      role:['ADMIN','SUPER_ADMIN']
    },
    {
      id:4,
      path:'/blogs',
      label:'My Blogs',
      role:['ADMIN','USER','SUPER_ADMIN']
    }
  ]

  return <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Social Media App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              options.filter(opt=>opt.role.includes(role)).map((e)=>{
                return <Link 
                  to={e.path} 
                  className={`nav-options ${e.path == location.pathname ? 'active':''}`} 
                  key={e.id}>
                    {e.label}
                  </Link>
              })
            }
          </Nav>
        </Navbar.Collapse>
        <div className='pr-5'>{role}</div>
        <div className='pr-5'>{name}</div>
        <Button variant='danger' onClick={()=>logout()}>Logout</Button>
      </Container>
    </Navbar>
  </>
}

export default TopBar