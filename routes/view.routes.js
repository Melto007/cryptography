import express from 'express'
const router = express.Router()
import { homeView } from '../controllers/views.controller.js'

router.get('/', homeView)

export default router