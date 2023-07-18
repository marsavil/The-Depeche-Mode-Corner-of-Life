import { Router } from 'express'
import getBio from '../controlers/bio'

const router = Router()

router.get('/', getBio)

export default router
