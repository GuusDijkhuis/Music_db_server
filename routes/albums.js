import express from 'express';

import { getAlbums, createAlbum, removeAlbum } from '../controllers/albums.js';

const router = express.Router();

router.get('/', getAlbums);
router.post('/', createAlbum);
router.delete('/:id', removeAlbum);

export default router;
