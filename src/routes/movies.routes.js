import express from 'express'
import moviesController from '../controller/movies.controller.js'
const router = express.Router()

router.get('/',moviesController.getAllMovies)
router.get('/:id',moviesController.getMovieById)

export default router