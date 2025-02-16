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

const editUserById = async(req,res)=>{
    try {
        let {id} = req.params
        let user = await usersModel.findOne({_id:id})
        if(user)
        {
            // await usersModel.updateOne({_id:id},{$set:req.body}) //validations will not happen

            user.name = req.body.name
            user.email = req.body.email

            await user.save() //validations will happen

            res.status(200).send({message:"User Data Updated Successfully"})
        }
        else
        {
            res.status(400).send({message:"Invalid Id"})
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const deleteUserById = async(req,res)=>{
    try {
        let {id} = req.params
        let user = await usersModel.findOne({_id:id})
        if(user)
        {
            await usersModel.findByIdAndDelete(id)

            res.status(200).send({message:"User Data Deleted Successfully"})
        }
        else
        {
            res.status(400).send({message:"Invalid Id"})
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}


export default{
    getAllUsers,
    getUserById,
    createUser,
    editUserById,
    deleteUserById
}