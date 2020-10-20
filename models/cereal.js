const { Schema, model } = require('mongoose');

//DOG SCHEMA
const cerealSchema = new Schema(
	{
		name: String,
		age: Number,
		img: String,
	},
	{ timestamps: true }
);

//DOG MODEL
const Cereal = model('Dog', cerealSchema);

//EXPORT MODEL
module.exports = Cereal;
