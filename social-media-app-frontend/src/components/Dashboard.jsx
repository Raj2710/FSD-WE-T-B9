import React, { useEffect, useState } from 'react'
import TopBar from './common/TopBar'
import blogsService from './../service/blogs.service'
import toast from 'react-hot-toast'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function MyBlogs() {

  let [data,setData] = useState([])
  let navigate = useNavigate()

  const changeStatus = async(id,status)=>{
    try {
      await blogsService.changeStatus(id,{status})
      getMyBlogs()
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message || "Something went wrong! Try again later")
    }
  }

  const getMyBlogs = async()=>{
    try {
      let data = await blogsService.getAllBlogs()
      setData(data)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message || "Something went wrong! Try again later")
    }
  }
  useEffect(()=>{
    getMyBlogs()
  },[])



  return <>
  <TopBar/>
  <div className='create-wrapper'>
    <Button variant='success' onClick={()=>navigate('/blogs/create')}>Create</Button>
  </div>
  <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Title</th>
          <th style={{width:"30%"}}>Description</th>
          <th>Likes</th>
          <th>Created At</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((blog,i)=>{
            return <tr key={blog.id}>
              <td>{i+1}</td>
              <td><img src={blog.image} alt='Blog image' height="100px" width="100px"/></td>
              <td>{blog.title}</td>
              <td className='overflow'>{blog.description}</td>
              <td>{blog?.likes?.length ?? 0}</td>
              <td>{blog.createdAt}</td>
              <td>{blog.status}</td>
              <td>
                <Button variant='primary' onClick={()=>navigate(`/blogs/${blog.id}`)}> View  </Button>
                &nbsp;&nbsp;
                {blog.status==="PENDING" ? <Button variant='success' onClick={()=>changeStatus(blog.id,"APPROVED")}>Approve</Button>:<></>}
                &nbsp;&nbsp;
                {blog.status==="PENDING" || blog.status === "APPROVED" ? <Button variant='danger' onClick={()=>changeStatus(blog.id,"REJECTED")}>Reject</Button>:<></>}
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </>
}

export default MyBlogs