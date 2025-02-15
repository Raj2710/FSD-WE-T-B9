import { findIndexById } from '../utils/common.helper.js'
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

const getAllUsers = (req,res)=>{
    res.status(200).send({
        message:"Data Fetched Successfully",
        data:USERS
    })
}

const getUserById = (req,res)=>{

    let {id} = req.params
    let index = findIndexById(USERS,id)

    if(index!=-1)
        res.status(200).send({
            message:"Data Fetched Successfully",
            data:USERS[index]
        })
    else
        res.status(400).send({message:"Invalid Id"})
}

const createUser = (req,res)=>{

    let id = USERS.length!=0?USERS[USERS.length-1].id+1 : 1
    USERS.push({id,...req.body})
    res.status(201).send({message:"User created successfully!"})
}

const editUserById = (req,res)=>{
    let {id} = req.params
    let {name,email} = req.body

    let index = findIndexById(USERS,id)

    if(index!=-1)
    {
        USERS.splice(index,1,{id,name,email})//this will replace the current index with the provided value
        res.status(200).send({message:"Data Saved Successfully!"})
    }
    else
        res.send({message:"Invalid Id"})
}

const deleteUserById = (req,res)=>{
    let {id} = req.params

    let index = findIndexById(USERS,id)
    if(index!=-1)
    {
        USERS.splice(index,1)//delete the element
        res.status(200).send({message:"User Deleted Successfully!"})
    }
    else
        res.send({message:"Invalid Id"})
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    editUserById,
    deleteUserById

}