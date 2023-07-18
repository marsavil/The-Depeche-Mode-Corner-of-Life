import { Router } from 'express'
import songRoute from './songRoute'
import bioRoute from './bioRoute'

const router = Router()

router.use("/songs", songRoute);
router.use("/bio", bioRoute);


export default router
