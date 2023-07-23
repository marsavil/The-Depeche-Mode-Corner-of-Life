import { Router } from 'express'
import { getSong, getSongs, getSongsByTittle, getSongsByAlbum, getSongsByProducer, getSongTittles } from '../controlers/songsController'

const router = Router()

router.get('/', getSongs);
router.get('/:id', getSong);
router.get('/tittle/:tittle', getSongsByTittle)
router.get('/album/:album', getSongsByAlbum)
router.get('/producer/:producer', getSongsByProducer)
router.get('/all/tittles', getSongTittles)


export default router