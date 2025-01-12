import axios from 'axios';
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
const URL = 'https://675525cb36bcd1eec852acd9.mockapi.io/usersAlt'

function Create() {

  let navigate = useNavigate()

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

      let res = await axios.post(URL,{...data,status:false})
      if(res.status===201)
        navigate('/dashboard')
    } catch (error) {
        toast.error(error.message || "Error Creating User")
    }

  }


  return <>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Create User</h1>
      </div>

      <div className='container-fluid'>
        <Form id="myform" onSubmit={handleSubmit}>

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

export default Create