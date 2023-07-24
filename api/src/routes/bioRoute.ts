import { Router } from 'express'
import getBio from '../controllers/bio'

const router = Router()

router.get('/', getBio)

export default router
