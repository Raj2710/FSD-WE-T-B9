import React, { useEffect, useState } from 'react'
import TopBar from '../common/TopBar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import Story from '../common/Story'
import blogsService from '../../service/blogs.service';
import { useNavigate, useParams } from 'react-router';
const allowedFormat = ["jpeg", "png", "jpg"]

function ViewBlog() {

  let [title,setTitle] = useState("")
  let [image,setImage] = useState("")
  let [description,setdesc] = useState("")
  let navigate = useNavigate()
  let params = useParams()
  let id = params.id

  const convertToBase64 = async(file)=>{
    return new Promise((resolve,reject)=>{
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = ()=>{
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error);
      };
    })
  }

  const handleImageUpload = async(e)=>{
    const file = e.target.files[0]
    let extension = file.name.split(".").pop()
    if(allowedFormat.includes(extension)){
      const base64 = await convertToBase64(file)
      setImage(base64)
    }
    else
    {
      toast.error(`Only ${allowedFormat.join(",")} formats are allowed`)
    }
  }

  const updateBlog = async()=>{
    try {
      await blogsService.updateBlog(id,{
        image,
        title,
        description
      })
      navigate('/blogs')
      
      
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message || "Something went wrong! Try again later")
    }
  } 


  const getBlogById = async()=>{
    try {
      let [data] = await blogsService.getBlogById(id)
      setTitle(data.title)
      setImage(data.image)
      setdesc(data.description)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message || "Something went wrong! Try again later")
    }
  }

  useEffect(()=>{
    getBlogById()
  },[])

  return <>
  <TopBar/>
  <h4 style={{padding:"10px"}}>Create New Blog</h4>
  <div className='create-blog-wrapper'>
    <div className='form-wrapper'>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="file"  placeholder="Upload Image" accept=".jpeg, .png, .jpg" name="myImage" onChange={(e)=>handleImageUpload(e)}/>
      </Form.Group>      

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} placeholder="Description" as="textarea" onChange={(e)=>setdesc(e.target.value)}/>
      </Form.Group>
    
      <Button variant="primary" onClick={()=>updateBlog()}>
        Post my blog!
      </Button>
    </Form>
    </div>

    <div className='preview-wrapper'>
        <h3>Preview</h3>
        <small>This is how your post looks for others</small>

        <Story
        title={title}
        image={image}
        description={description}
        />    
    </div>

  </div>
  </>
}

export default ViewBlog