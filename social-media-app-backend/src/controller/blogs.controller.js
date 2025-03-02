import blogsModel from '../model/blogs.model.js'

const getAllBlogs = async(req,res)=>{
    try {
        res.status(200).send({
            message:"Data Fetch Successfull!",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const getAllFeeds = async(req,res)=>{
    try {
        res.status(200).send({
            message:"Data Fetch Successfull!",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}
const getBlogsByUserId = async(req,res)=>{
    try {
        res.status(200).send({
            message:"Data Fetch Successfull!",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}
const getBlogById = async(req,res)=>{
    try {
        res.status(200).send({
            message:"Data Fetch Successfull!",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const createBlog = async(req,res)=>{
    try {
        res.status(200).send({
            message:"Data Fetch Successfull!",
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
        res.status(200).send({
            message:"Data Fetch Successfull!",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}


const updateBlog = async(req,res)=>{
    try {
        res.status(200).send({
            message:"Data Fetch Successfull!",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

export default {
    getAllBlogs,
    getAllFeeds,
    getBlogById,
    getBlogsByUserId,
    createBlog,
    changeStatus,
    updateBlog
}