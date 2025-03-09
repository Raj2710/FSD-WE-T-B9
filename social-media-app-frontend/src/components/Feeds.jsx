import React, { useEffect, useState } from 'react'
import TopBar from './common/TopBar'
import Story from './common/Story'
import blogsService from '../service/blogs.service'
import toast from 'react-hot-toast'

function Feeds() {

  let [data,setData] = useState([])
  let userId = sessionStorage.getItem('userId')
  const getBlogs = async()=>{
    try {
      let data =  await blogsService.getAllFeeds()
      setData(data)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message || "Something went wrong! Try again later")
    }
  }

  const likeUnlike = async(id)=>{
    try {
      await blogsService.likeUnlike(id)
      getBlogs()
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message || "Something went wrong! Try again later")
    }
  }

  useEffect(()=>{
    getBlogs()
  },[])
  return <>
  <TopBar/>
  <div className='feeds-wrapper'>
      {data.map((blog)=>{
        let likeData = blog.likes.find((e)=>e.id===userId)
        return <Story key={blog.id}
        title={blog.title}
        image={blog.image}
        description={blog.description}
        name={`${blog.firstName} ${blog.lastName}`}
        id={blog.id}
        likes={blog.likes.length}
        likeUnlike={likeData?true:false}
        callback={likeUnlike}
        />
      })}
  </div>
  </>
}

export default Feeds