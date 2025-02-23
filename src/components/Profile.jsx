import React, { useEffect, useState } from 'react'
import TopBar from './common/TopBar'
import apiService from '../service/api.service'
import ApiRoutes from '../utils/ApiRoutes'
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';

function Profile() {

  let [data,setData] = useState({})
  let getData = async()=>{
    try {
      let res = await apiService.get(ApiRoutes.PROFILE.path,{authentication:ApiRoutes.PROFILE.authentication})
      setData(res.data)

    } catch (error) {
      toast.error(error?.response?.data?.message || error.message || "Something went wrong! Try again later")
    }
  }

  useEffect(()=>{
    getData()
  },[])

  const toUpperCase = (string)=>{
      return string[0].toUpperCase()+string.slice(1)
  }

  return <>
    <TopBar/>
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
         <th>Key</th>
         <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(data).map((key,i)=>{
            return <tr key={i}>
              <td>{toUpperCase(key)}</td>
              <td>{
                  key==='status' ? data[key] ? "Active" : "Inactive" : data[key]
                }</td>
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
    </>
}

export default Profile