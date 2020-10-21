const { Schema, model } = require('mongoose');
// const mongoose = require('../db/connection')

const cerealSchema = new Schema(
	{
		name: String,
		brand: String,
		type: String,
        img: String,
        // beverage: [{ ref: "beverage", type: mongoose.Types.ObjectId}]
	},
	{ timestamps: true }
);

const Cereal = model('Cereal', cerealSchema);

//EXPORT MODEL
module.exports = Cereal;
