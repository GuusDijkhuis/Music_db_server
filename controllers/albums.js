import AlbumInfo from '../models/albums.js';


export const getAlbums = async (req, res) => {
	try {
		const albums = await AlbumInfo.find();
		res.status(200).json(albums);
	} catch (error) {
		console.log(error);
	}
}

export const createAlbum = async (req, res) => {
	const album = req.body;
	const newAlbum = new AlbumInfo(album);
	try {
		await newAlbum.save()
	} catch (error) {
		console.log(error);
	}
}