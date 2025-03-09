import apiService from "./api.service"
import ApiRoutes from "../utils/ApiRoutes"
import toast from "react-hot-toast"

const getAllBlogs = async()=>{
    let res = await apiService.get(
        ApiRoutes.GET_ALL_BLOGS.path,
        {
            authentication:ApiRoutes.GET_ALL_BLOGS.authentication
        })
    if(ApiRoutes.GET_ALL_BLOGS.notify)
        toast.success(res.message)
    return res.data
}

const getBlogById = async(id)=>{
    let res = await apiService.get(
        `${ApiRoutes.GET_BLOG_BY_ID.path}/${id}`,
        {
            authentication:ApiRoutes.GET_BLOG_BY_ID.authentication
        })
    if(ApiRoutes.GET_BLOG_BY_ID.notify)
        toast.success(res.message)
    return res.data
}

const getBlogsByUserId = async()=>{
    let res = await apiService.get(
        ApiRoutes.GET_BLOGS_BY_USER_ID.path,
        {
            authentication:ApiRoutes.GET_BLOGS_BY_USER_ID.authentication
        })
    if(ApiRoutes.GET_BLOGS_BY_USER_ID.notify)
        toast.success(res.message)
    return res.data
}


const getAllFeeds = async()=>{
    let res = await apiService.get(
        ApiRoutes.GET_ALL_FEEDS.path,
        {
            authentication:ApiRoutes.GET_ALL_FEEDS.authentication
        })
    if(ApiRoutes.GET_ALL_FEEDS.notify)
        toast.success(res.message)
    return res.data
}

const changeStatus = async(id,payload)=>{
    let res = await apiService.put(
        `${ApiRoutes.CHANGE_STATUS.path}/${id}`,
        payload,
        {
            authentication:ApiRoutes.CHANGE_STATUS.authentication
        })
    if(ApiRoutes.CHANGE_STATUS.notify)
        toast.success(res.message)
    return res
}

const updateBlog = async(id,payload={})=>{
    let res = await apiService.put(
        `${ApiRoutes.UPDATE_BLOG.path}/${id}`,
        payload,
        {
            authentication:ApiRoutes.UPDATE_BLOG.authentication
        })
    if(ApiRoutes.UPDATE_BLOG.notify)
        toast.success(res.message)
    return res
}

const likeUnlike = async(id)=>{
    let res = await apiService.patch(
        `${ApiRoutes.LIKE_UNLIKE.path}/${id}`,{},
        {
            authentication:ApiRoutes.LIKE_UNLIKE.authentication
        })
    if(ApiRoutes.LIKE_UNLIKE.notify)
        toast.success(res.message)
    return res
}

const createBlog = async(payload={})=>{
    let res = await apiService.post(
        ApiRoutes.CREATE_BLOG.path,
        payload,
        {
            authentication:ApiRoutes.CREATE_BLOG.authentication
        })
    if(ApiRoutes.CREATE_BLOG.notify)
        toast.success(res.message)
    return res
}
export default {
    getAllBlogs,
    getAllFeeds,
    getBlogById,
    getBlogsByUserId,
    likeUnlike,
    createBlog,
    updateBlog,
    changeStatus
}