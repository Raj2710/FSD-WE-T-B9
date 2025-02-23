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

  const options = [
    {
      id:1,
      path:'/dashboard',
      label:'Dashboard',
      role:['ADMIN']
    },
    {
      id:2,
      path:'/profile',
      label:'Profile',
      role:['ADMIN','USER']
    }
  ]

  return <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Auth Frontend</Navbar.Brand>
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
        <Button variant='danger' onClick={()=>logout()}>Logout</Button>
      </Container>
    </Navbar>
  </>
}

export default TopBar