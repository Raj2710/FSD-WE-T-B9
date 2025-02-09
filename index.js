const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8000
const USERS = [
    {
        id:1,
        name:"Naga",
        email:"naga@gmail.com"
    },
    {
        id:2,
        name:"Raj",
        email:"raj@gmail.com"
    },
    {
        id:3,
        name:"Vinoth",
        email:"vinoth@gmail.com"
    },
    {
        id:4,
        name:"Cibi",
        email:"cibi@gmail.com"
    }
]

//middleware - its a function that will be used within req,res cycle
app.use(express.json())
app.use(cors())

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})

app.get('/',(req,res)=>{
    res.status(200).send(`<h1>Welcome to Express</h1>`)
})

app.get('/users',(req,res)=>{
    res.status(200).send(USERS)
})

app.get('/users/:id',(req,res)=>{

    let {id} = req.params

    let index = -1
    for(let i=0;i<USERS.length;i++)
    {
        if(id == USERS[i].id)
            index = i
    }

    if(index!=-1)
        res.status(200).send(USERS[index])
    else
        res.status(400).send({message:"Invalid Id"})
})

app.post('/users',(req,res)=>{

    let id = USERS.length!=0?USERS[USERS.length-1].id+1 : 1
    USERS.push({id,...req.body})
    res.status(201).send({message:"User created successfully!"})
})

app.put('/users/:id',(req,res)=>{
    let {id} = req.params
    let {name,email} = req.body

    let index = -1
    for(let i=0;i<USERS.length;i++)
    {
        if(id == USERS[i].id)
            index = i
    }

    if(index!=-1)
    {
        USERS.splice(index,1,{id,name,email})//this will replace the current index with the provided value
        res.status(200).send({message:"Data Saved Successfully!"})
    }
    else
        res.send({message:"Invalid Id"})
})

app.delete('/users/:id',(req,res)=>{
    let {id} = req.params

    let index = -1
    for(let i=0;i<USERS.length;i++)
    {
        if(id == USERS[i].id)
            index = i
    }

    if(index!=-1)
    {
        USERS.splice(index,1)//delete the element
        res.status(200).send({message:"User Deleted Successfully!"})
    }
    else
        res.send({message:"Invalid Id"})
})

app.listen(PORT, ()=>console.log(`App listening to ${PORT}`))