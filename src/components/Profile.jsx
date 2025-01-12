import axios from 'axios';
import React,{useEffect,useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router';
import toast from 'react-hot-toast';
const URL = 'https://675525cb36bcd1eec852acd9.mockapi.io/usersAlt'

function Profile() {

  let navigate = useNavigate()
  let myForm = useRef()
  let {id} = useParams()

  const getUserData = async()=>{
    try {
      let res = await axios.get(`${URL}/${id}`)

      let {name,email,mobile,dob,address:{addressLine,city,state,zipcode}} = res.data

      myForm.current.name.value = name
      myForm.current.email.value = email
      myForm.current.mobile.value = mobile
      myForm.current.dob.value = dob
      myForm.current.addressLine.value = addressLine
      myForm.current.city.value = city
      myForm.current.state.value = state
      myForm.current.zipcode.value = zipcode

    } catch (error) {
      toast.error(error.message || "Error Fetching User")
    }
  }

  const handleSubmit = async(event)=>{
    event.preventDefault()

    try {
      let addressElements = ['addressLine','city','state','zipcode']
      let data={address:{}}
      let formData = new FormData(event.currentTarget)
      for (let [key,value] of formData.entries()) {
        if(addressElements.includes(key))
          data["address"][key]=value
        else
          data[key]=value
      }

      let res = await axios.put(`${URL}/${id}`,data)
      if(res.status===200)
        navigate('/dashboard')
    } catch (error) {
        toast.error(error.message || "Error Editing User")
    }

  }

  useEffect(()=>{
    if(id!==null)
      getUserData()
  },[])

  return <>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Profile</h1>
      </div>

      <div className='container-fluid'>
        <Form id="myform" ref={myForm} onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name="name" id="name"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" id="email"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Mobile" name="mobile" id="mobile"/>
          </Form.Group>

          

          <div className='row'>
            <Form.Group className="col mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" name="dob" id="dob"/>
            </Form.Group>

            <Form.Group className="col mb-3">
              <Form.Label>Address Line</Form.Label>
              <Form.Control type="text" placeholder="Address Line" name="addressLine" id="addressLine"/>
            </Form.Group>

          </div>
          
          <div className='row'>
            <Form.Group className="col mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" name="city" id="city"/>
            </Form.Group>

            <Form.Group className="col mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" name="state" id="state"/>
            </Form.Group>

            <Form.Group className="col mb-3">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="Zipcode" name="zipcode" id="zipcode"/>
            </Form.Group>
          </div>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
      </div>
  </>
}

export default Profile