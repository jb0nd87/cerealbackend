// Environmental Variables
require('dotenv').config();
const { PORT = 4000, NODE_ENV = 'development' } = process.env;

//MONGO CONNECTION
const mongoose = require('./db/connection');

//CORS
const cors = require('cors');
const corsOptions = require('./configs/cors.js');

//Bringing in Express
const express = require('express');
const app = express();

//OTHER IMPORTS
const morgan = require('morgan');
const cerealRouter = require('./controllers/cereal');

//MIDDLEWARE
NODE_ENV === 'production' ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
app.use(morgan('tiny')); //logging

//Routes and Routers

//Route for testing server is working
app.get('/', (req, res) => {
	res.json({
		status: 200,
		msg: 'you have hit the default route...nothing to see here',
	});
});

app.use('/cereal', cerealRouter);

app.listen(PORT, () => {
	console.log(`Your are listening on port ${PORT}`);
});
