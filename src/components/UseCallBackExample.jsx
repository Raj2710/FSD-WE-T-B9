import React,{useCallback, useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const URL = 'https://675525cb36bcd1eec852acd9.mockapi.io/product'

function UseCallBackExample() {

    let [data,setData] = useState([])
    let [theme,setTheme] = useState(true)


    const getData = useCallback(()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(users=>setData(users))
        .catch(error=>console.error(error))
    },[data])

    const changeStatus = useCallback((id)=>{
        let newArray = [...data]
        let index = -1
        for(let i=0;i<data.length;i++)
            if(data[i].id === id)
                index=i
        newArray[index] = {...newArray[index],status:!newArray[index].status}
        setData(newArray)
    },[data])

    useEffect(()=>{
        getData()
    },[])


  return <div className={theme?"light":"dark"}>

    <div>Select your fav theme</div>

    <Form>
        <Form.Check
            type="switch"
            id="custom-switch"
            label="Light/Dark"
            checked={theme}
            onChange={()=>setTheme(!theme)}
        />
    </Form>


    <Button onClick={()=>getData()}>Refresh</Button>

    <Table striped bordered hover variant={theme?"light":"dark"}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((e)=>{
            return  <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={e.status?"Active":"Inactive"}
                    checked={e.status}
                    onChange={()=>changeStatus(e.id)}
                />
            </Form>
            </td>
          </tr>
        })
       }
      </tbody>
    </Table>
  </div>
}

export default UseCallBackExample