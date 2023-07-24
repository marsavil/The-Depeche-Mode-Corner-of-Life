import { Router } from 'express'
import { getDevotee } from '../controllers/devoteeController'
import { chargeDevotees, deleteDevDevotees } from '../controllers/devDevotees'

const router = Router()

router.get('/:id', getDevotee)
router.get('/', getDevotee)
router.post('/dev', chargeDevotees)
router.delete('/dev', deleteDevDevotees)


export default router