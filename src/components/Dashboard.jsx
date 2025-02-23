import React, { useEffect, useState } from 'react'
import TopBar from './common/TopBar'
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import apiService from '../service/api.service';
import ApiRoutes from '../utils/ApiRoutes';
function Dashboard() {
  const [data,setData] = useState([])
  const getData = async()=>{
    try {
      let res = await apiService.get(ApiRoutes.USER.path,{
        authentication:ApiRoutes.USER.authentication
      })
      setData(res.data)

    } catch (error) {
      toast.error(error?.response?.data?.message || error.message || "Something went wrong! Try again later")
    } 
  }

  useEffect(()=>{
    getData()
  },[])

  return <>
    <TopBar/>
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Status</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key={e._id}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.status?"Active":"Inactive"}</td>
              <td>{e.role}</td>
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
  </>
}

export default Dashboard