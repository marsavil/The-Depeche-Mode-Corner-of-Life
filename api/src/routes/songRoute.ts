import { Router } from 'express'
import { getSong, getSongs, getSongsByTitle, getSongsByAlbum, getSongsByProducer, getSongTitles, getTopFavourite, addSongToFavs } from '../controllers/songsController'


const router = Router()

router.get('/top/:rank', getTopFavourite);
router.get('/', getSongs);
router.get('/:id', getSong);
router.get('/title/:title', getSongsByTitle);
router.get('/album/:album', getSongsByAlbum);
router.get('/producer/:producer', getSongsByProducer);
router.get('/all/titles', getSongTitles);
router.put('/add/favourite', addSongToFavs);



export default router