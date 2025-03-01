import express from 'express'
import feedbackController from '../controller/feedback.controller.js'
import authGuard from '../middleware/authGuard.middleware.js'
const router = express.Router()

router.get('/',authGuard,feedbackController.getFeedbacks)
router.post('/collect',authGuard,feedbackController.collect)
router.get('/getFeedbackById/:id',authGuard,feedbackController.getFeedbackById)
router.get('/getFeedbackByUserId/:userId',authGuard,feedbackController.getFeedbackByuserId)

export default router