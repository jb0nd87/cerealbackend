const { Schema, model } = require('mongoose');
const mongoose = require('../db/connection');

const beverageSchema = new Schema(
	{
		name: String,
		brand: String,
		type: String,
		img: String,
		cereal: [{ ref: 'cereal', type: mongoose.Types.ObjectId }],
	},
	{ timestamps: true }
);

const Beverage = model('Beverage', beverageSchema);

//EXPORT MODEL
module.exports = Beverage;
