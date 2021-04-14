import express from 'express';

import { getAlbums, createAlbum, removeAlbum, updateAlbum } from '../controllers/albums.js';

const router = express.Router();

router.get('/', getAlbums);
router.post('/', createAlbum);
router.delete('/:id', removeAlbum);
router.patch('/:id', updateAlbum);

export default router;
