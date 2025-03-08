import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import apiService from '../service/api.service';
import ApiRoutes from '../utils/ApiRoutes'
import { useNavigate } from 'react-router';
import useLogout from '../hooks/useLogout';
function Login() {

  let navigate = useNavigate()
  let logout = useLogout()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      let email = e.target.elements.email.value
      let password = e.target.elements.password.value
      if(email && password)
      {
        let res = await apiService.post(ApiRoutes.LOGIN.path,{email,password},{
          authentication:ApiRoutes.LOGIN.authentication
        })

        sessionStorage.setItem('token',res.token)
        sessionStorage.setItem('role',res.data.role)
        sessionStorage.setItem('name',`${res.data.firstName} ${res.data.lastName}`)

        if(res.role==='ADMIN' || res.role==='SUPER_ADMIN')
          navigate('/dashboard')
        else if(res.role==='USER')
          navigate('/feeds')

        toast.success(res.message)
      }
      else
        toast.error('Email and Password are required!')
    } catch (error) {
        toast.error(error?.response?.data?.message || error.message || "Something went wrong! Try again later")
    }
    
  }

  useEffect(()=>{
    logout()
  },[])


  return <div className='form-wrapper'>
    <div>
      <h2>Login Here!</h2>
      to immerse yourselves in our world!
    </div>
     <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
}

export default Login