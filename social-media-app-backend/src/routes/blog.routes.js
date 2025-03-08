import express from 'express'
import payloadValidator from '../middleware/payload.validator.js'
import authGuard from '../middleware/authGuard.middleware.js'
import adminGuard from '../middleware/adminGuard.middleware.js'
import blogsController from '../controller/blogs.controller.js'
import {createBlogSchema,changeStatusSchema} from '../validator/blog.validator.js'

const router = express.Router()

router.get('/getAllBlogs',authGuard,adminGuard,blogsController.getAllBlogs)
router.get('/getAllFeeds',authGuard,blogsController.getAllFeeds)
router.get('/getBlogsByUserId',authGuard,blogsController.getBlogsByUserId)
router.get('/getBlogById/:id',authGuard,blogsController.getBlogById)
router.post('/createBlog',authGuard,payloadValidator(createBlogSchema),blogsController.createBlog)
router.put('/updateBlog/:id',authGuard,payloadValidator(createBlogSchema),blogsController.updateBlog)
router.put('/changeStatus/:id',authGuard,adminGuard,payloadValidator(changeStatusSchema),blogsController.changeStatus)
router.patch('/likeUnlike/:id',authGuard,blogsController.likeUnlike)

export default router