import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import dotenv from 'dotenv';

import albumRoutes from './routes/albums.js';


const app = express();

dotenv.config();

app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({limit: "30mb"}));

app.use(cors());

app.use('/albums', albumRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
	.catch((err) => console.log(err)) 



mongoose.set('useFindAndModify', false);
