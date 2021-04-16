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
export const removeAlbum = async (req, res) => {
	try {
		await AlbumInfo.deleteOne({ _id: req.params.id })
	} catch (error) {
		console.log(error);
	}
}
export const updateAlbum = async (req, res) => {
	try {
		await AlbumInfo.findOneAndUpdate({ _id: req.params.id }, req.body)
	} catch (error) {
		console.log(error);
	}
}
export const getAlbum = async (req, res) => {
	try {
		const album = await AlbumInfo.findOne({ _id: req.params.id});
		res.status(200).json(album);
	} catch (error) {
		console.log(error);
	}
}