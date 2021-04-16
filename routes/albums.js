import express from 'express';

import { getAlbums, createAlbum, removeAlbum, updateAlbum, getAlbum } from '../controllers/albums.js';

const router = express.Router();

router.get('/', getAlbums);
router.get('/:id', getAlbum);
router.post('/', createAlbum);
router.delete('/:id', removeAlbum);
router.patch('/:id', updateAlbum);

export default router;
