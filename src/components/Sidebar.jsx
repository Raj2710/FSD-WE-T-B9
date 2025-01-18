import React,{useContext} from 'react'
import { Link,NavLink } from 'react-router'
import { SupportContext } from '../App'

function Sidebar() {

    let support = useContext(SupportContext)

    console.log(support)

  return <>
    
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

           <Link to={'/dashboard'}>
            <div className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </div>
            </Link>

            
            <hr className="sidebar-divider my-0"/>

           
            <li className="nav-item">
                <NavLink to='/dashboard' className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></NavLink>
            </li>

            <hr className="sidebar-divider"/>

           
            <div className="sidebar-heading">
                Interface
            </div>

          
            <li className="nav-item">
                <NavLink to='/create' className="nav-link collapsed">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Create</span>
                </NavLink>
            </li>

           
            <li className="nav-item">
                <NavLink to='/profile' className="nav-link" >
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Profile</span>
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to='/nested-example' className="nav-link collapsed">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Nestedexample</span>
                </NavLink>
            </li>

            <hr className="sidebar-divider"/>
            

        </ul>
  </>
}

export default Sidebar