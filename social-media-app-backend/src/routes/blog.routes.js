import express from 'express'
import usersController from '../controller/users.controller.js'
import payloadValidator from '../middleware/payload.validator.js'
import authGuard from '../middleware/authGuard.middleware.js'
import adminGuard from '../middleware/adminGuard.middleware.js'
import blogsController from '../controller/blogs.controller.js'

const router = express.Router()

router.get('/getAllBlogs',authGuard,adminGuard,blogsController.getAllBlogs)
router.get('/getAllFeeds',authGuard,blogsController.getAllFeeds)
router.get('/getBlogsByUserId',authGuard,blogsController.getBlogsByUserId)
router.get('/getBlogById/:id',authGuard,blogsController.getBlogById)
router.post('/createBlog',authGuard,blogsController.createBlog)
router.put('/updateBlog/:id',authGuard,blogsController.updateBlog)
router.put('/changeStatus/:id',authGuard,adminGuard,blogsController.changeStatus)

export default router