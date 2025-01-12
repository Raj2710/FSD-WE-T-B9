import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import Table from 'react-bootstrap/Table';
import { findIndex } from '../utils/helper'

const URL = 'https://675525cb36bcd1eec852acd9.mockapi.io/usersAlt'
function Dashboard({count,setCount}) {

  let [users,setUsers] = useState([])
  let navigate = useNavigate()

  const handleNavigate = ()=>{
    navigate('/create')
  }

  const getUsers = async()=>{
    try {
        let res = await axios.get(URL)
        if(res.status === 200)
        {
            toast.success("Data Fetch Successfull")
            setUsers(res.data)
        }
    } catch (error) {
        toast.error(error.message || "Error Fetching Users List")
    }
  }

  const changeStatus = async(id)=>{
    console.log(id)
    try {

        let index = findIndex(users,id)

        if(index!==-1)
        {
            //change status locally
            let newArray = JSON.stringify(users).json()
            newArray[index].status = !newArray[index].status
            setUsers(newArray)

            //change status in API Call
            let res = await axios.put(`${URL}/{${id}`,{
                status:!users[index].status
            })
            if(res.status === 200)
            {
               getUsers()
            }
        }
    } catch (error) {
        toast.error(error.message || "Error Fetching Users List")
    }
  }

  const deleteUser = async(id)=>{
    try {
        let index = findIndex(users,id)
        if(index!==-1)
        {
            let newArray = [...users]
            //delete element at particular index
            newArray.splice(index,1)
            setUsers(newArray)

            //api call to delete
            let res = await axios.delete(`${URL}/${id}`)
            if(res.status === 200)
                getUsers()
        }
        else
            toast.error("Invalid Data Selected")
       
    } catch (error) {
        toast.error(error.message || "Error Fetching Users List")
        getUsers()
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  return <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <Button variant='primary' className='mt-2' onClick={()=>handleNavigate()}>Create</Button>
      </div>

     
      <div className="row">

       {/* <div>
       <Button onClick={()=>{setCount(count-1)}}>-</Button>
        &nbsp; &nbsp;
        {count}
        &nbsp; &nbsp;
        <Button onClick={()=>{setCount(count+1)}}>+</Button>
       </div> */}
         
          <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                  Earnings (Monthly)</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                          </div>
                          <div className="col-auto">
                              <i className="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          
          <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                  Earnings (Annual)</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                          </div>
                          <div className="col-auto">
                              <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          
          <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                              </div>
                              <div className="row no-gutters align-items-center">
                                  <div className="col-auto">
                                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                  </div>
                                  <div className="col">
                                      <div className="progress progress-sm mr-2">
                                          <div className="progress-bar bg-info" role="progressbar"
                                              style={
                                                {
                                                  width:"50%",
                                                  ariaValueNow:"50",
                                                  ariaValueMin:"0",
                                                  ariaValueMax:"100"
                                                  }
                                                }></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-auto">
                              <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          
          <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                  Pending Requests</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                          </div>
                          <div className="col-auto">
                              <i className="fas fa-comments fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className='row'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((user)=>{
                return <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" checked={user.status} onChange={()=>changeStatus(user.id)}/>
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td>
                        <Button variant='primary' onClick={()=>navigate(`/profile/${user.id}`)}>Edit</Button>
                        &nbsp;&nbsp;
                        <Button variant='danger' onClick={()=>deleteUser(user.id)}>Delete</Button>
                    </td>
                </tr>
            })
        }
      </tbody>
    </Table>
      </div>

  </>
}

export default Dashboard