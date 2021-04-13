import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema({
	title: String,
	artist: String,
	genre: String,
	length: String,
	songCount: Number,
	albumCover: String,
	songs: [
		{
			title: String,
			artist: String,
			songLength: String
		}
	]
});

const AlbumInfo = mongoose.model('AlbumInfo', albumSchema);


export default AlbumInfo;