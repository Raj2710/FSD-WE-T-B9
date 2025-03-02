import { ROLE } from "../common/constants.js"
import usersModel from "../model/users.model.js"
import {hashValue,hashCompare,createToken} from '../utils/auth.js'

const getAllUsers = async(req,res)=>{
    try {

        let visibleRole = [ROLE.USER]

        if(req.headers.role === ROLE.SUPER_ADMIN)
            visibleRole.push(ROLE.ADMIN)

        let users = await usersModel.find({role:{$in:visibleRole}})

        res.status(200).send({
            message:"Data Fetch Successfull!",
            data:users
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
        
        let id = req.params.id

        let user = await usersModel.findOne({id},{_id:0,password:0})

        res.status(200).send({
            message:"Data Fetch Successfull!",
            data:user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const changeStatus = async(req,res)=>{
    try {
        
        let id = req.params.id
        let currentUserRole = req.headers.role

        let user = await usersModel.findOne({id})

        if(currentUserRole === ROLE.SUPER_ADMIN && user.role!=currentUserRole)
        {
            user.status = !user.status
            await user.save()
            res.status(200).send({message:"Status Changed Successfully"})
        }
        else if(currentUserRole === ROLE.ADMIN && user.role != currentUserRole && user.role!=ROLE.SUPER_ADMIN)
        {
            user.status = !user.status
            await user.save()
            res.status(200).send({message:"Status Changed Successfully"})
        }
        else
            res.status(400).send({message:"Status Changed Failed"})
        
        

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const getProfileDetails = async(req,res)=>{
    try {
        let id = req.headers.id
        let user = await usersModel.findOne({id},{_id:0,password:0,role:0})
        res.status(200).send({
            message:"Data Fetch Successfull!",
            data:user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}


const signup = async(req,res)=>{
    try {
        let {firstName="",lastName="",email="",mobile="",password="",role=ROLE.USER} = req.body
        let user = await usersModel.findOne({email})
        if(!user)
        {
            let newUser = new usersModel()
            
            newUser.firstName = firstName
            newUser.lastName = lastName
            newUser.email = email
            newUser.mobile = mobile
            newUser.role = role
            newUser.password = await hashValue(password)

            await newUser.save()

            res.status(201).send({message:"Signup Successfull!"})
            
        }
        else
            res.status(400).send({message:`User with ${email} already exists`})
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const signin = async(req,res)=>{
    try {
        let {email="",password=""} = req.body
        let user = await usersModel.findOne({email})
        if(user)
        {
            if(user.status)
            {
                if(await hashCompare(password,user.password))
                {
                    let token = await createToken({
                        id : user.id,
                        status : user.status,
                        role : user.role,
                        firstName : user.firstName,
                        lastName : user.lastName
                    })

                    res.status(200).send({
                        message:"Login Successful!",
                        token,
                        data:{
                            role : user.role,
                            firstName : user.firstName,
                            lastName : user.lastName
                        }
                    })
                }
                else
                    res.status(400).send({message:'Invalid Password'})
            }
            else
                res.status(400).send({message:`Account Inactive! Contact Admin.`})
        }
        else
            res.status(400).send({message:`User with ${email} does not exists`})

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}




export default {
    signup,
    signin,
    getAllUsers,
    getProfileDetails,
    getUserById,
    changeStatus
}