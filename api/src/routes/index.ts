import { Router } from 'express'
import songRoute from './songRoute'
import bioRoute from './bioRoute'
import devoteeRoute from './devoteeRoute'

const router = Router()

router.use("/songs", songRoute);
router.use("/bio", bioRoute);
router.use("/devotees", devoteeRoute);


export default router
