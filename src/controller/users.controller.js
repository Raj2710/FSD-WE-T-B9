import usersModel from "../model/users.model.js"

const getAllUsers = async(req,res)=>{
    try {
        let data = await usersModel.find()

        res.status(200).send({
            message:"Data Fetch Successfull",
            data
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const getUserById = async(req,res)=>{
    try {
        let {id} = req.params
        let data = await usersModel.findOne({_id:id})

        res.status(200).send({
            message:"Data Fetch Successfull",
            data
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const createUser = async(req,res)=>{
    try {
        let user = await usersModel.findOne({email:req.body.email})
        console.log(user)
        if(!user)
        {
            await usersModel.insertOne(req.body)
            res.status(201).send({
                message:"User Created Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:`User with ${req.body.email} already exists!`
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

export default{
    getAllUsers,
    getUserById,
    createUser
}