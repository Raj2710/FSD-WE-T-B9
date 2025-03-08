import blogsModel from '../model/blogs.model.js'
import userModel from '../model/users.model.js'
import { BLOG_STATUS } from '../common/constants.js';

const buildBlogPipeLine = ({sort={},query={}})=>{
    const blogPipeLine = [
        {
            $lookup:{
                from:"users",
                localField:"userId",
                foreignField:"id",
                as:"userData"
            }
        },
        {
            $unwind:"$userData"
        },
        {
            $lookup:{
                from:"users",
                localField:"likedBy",
                foreignField:"id",
                as:"userLikes"
            }
        },
        {
            $project:{
                id:1, 
                title:1,
                image:1, 
                description:1, 
                userId:1, 
                createdAt:1,
                status:1,
                approvalById:1,
                approvalByName:1,
                firstName:"$userData.firstName", 
                lastName:"$userData.lastName",
                likes:{
                    $map:{
                        input:"$userLikes",
                        as: "item",
                        in:{
                            id: "$$item.id",
                            firstName: "$$item.firstName",
                            lastName:"$$item.lastName"
                        }
                    }
                }
            }
        }
    ] 

    if(Object.keys(query).length)
        blogPipeLine.unshift({
            $match:query
        })
    if(Object.keys(sort).length)
        blogPipeLine.push({
            $sort:sort
        })
        
    return blogPipeLine
}

const getAllBlogs = async(req,res)=>{
    try {
        let sort = {createdAt:-1}
        let data = await blogsModel.aggregate(buildBlogPipeLine({sort}));
        res.status(200).send({
            message:"Data Fetch Successfull!",
            data
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
        let query = {status:BLOG_STATUS.APPROVED}
        let sort = {createdAt:-1}
        let data = await blogsModel.aggregate(buildBlogPipeLine({query,sort}))
        res.status(200).send({
            message:"Data Fetch Successfull!",
            data
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
        let userId = req.headers.id
        let query = {userId}
        let sort = {createdAt:-1}
        let data = await blogsModel.aggregate(buildBlogPipeLine({query,sort}))
        res.status(200).send({
            message:"Data Fetch Successfull!",
            data
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
        let {id} = req.params
        let query = {id}
        let data = await blogsModel.aggregate(buildBlogPipeLine({query}))
        res.status(200).send({
            message:"Data Fetch Successfull!",
            data
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
        let {title="",description="",image=""} = req.body
        let userId = req.headers.id

        let blog = new blogsModel()

        blog.title = title.trim()
        blog.description = description.trim()
        blog.image = image.trim()
        blog.userId = userId.trim()

        await blog.save()

        res.status(200).send({
            message:"Blog Saved Successfully!",
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
        let {id=""} = req.params
        let {status="",reason=""} = req.body
        let userId = req.headers.id
        let blog = await blogsModel.findOne({id});
        if(blog)
        {   
            let user = await userModel.findOne({id:userId})
            blog.status = BLOG_STATUS[status] ?? BLOG_STATUS.PENDING
            blog.approvalById = userId
            blog.approvalByName = `${user.firstName} ${user.lastName}`
            blog.approvalAt = Date.now()
            blog.reason = reason.trim()

            await blog.save()
            res.status(200).send({
                message:"Status Changed Successfully!",
                status:blog.status
            })
        }
        else
            res.status(400).send({message:"Invalid Id"})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const updateBlog = async(req,res)=>{
    try {
        let {id=""} = req.params

        let blog = await blogsModel.findOne({id});

        if(blog)
            {   
                let {title="",description="",image=""} = req.body
                
                blog.title = title.trim()
                blog.description = description.trim()
                blog.image = image.trim()
                blog.status = BLOG_STATUS.PENDING

                await blog.save()

                res.status(200).send({
                    message:"Blog Saved Successfully!"
                })
            }
            else
                res.status(400).send({message:"Invalid Id"})

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const likeUnlike = async(req,res)=>{
    try {
        let {id=""} = req.params
        let userId = req.headers.id

        let blog = await blogsModel.findOne({id});

        if(blog)
            {   
                if(blog.likedBy.includes(userId))//if already a usere liked my post it will return true else false.
                    blog.likedBy.splice(blog.likedBy.indexOf(userId),1) // unliked the post
                else
                    blog.likedBy.push(userId)
               
                await blog.save()

                res.status(200).send({
                    message:"Saved"
                })
            }
            else
                res.status(400).send({message:"Invalid Id"})

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
    updateBlog,
    likeUnlike
}