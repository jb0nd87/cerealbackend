const Cereal = require('../models/cereal');
const Beverage = require('../models/beverage');
const { Router } = require('express');
const { findById } = require('../models/cereal');
const router = Router();
const mongoose = require('mongoose');
const toId = mongoose.Types.ObjectId;

//get beverage
router.get('/', async (req, res) => {
	res.json(await Beverage.find({}).populate('cereals'));
});

//get cereal
router.get('/cereal', async (req, res) => {
	res.json(await Beverage.find({}));
});

//create beverage
router.post('/', async (req, res) => {
	res.json(await Beverage.create(req.body));
});

//create cereal
router.post('/cereal/:beverageid', async (req, res) => {
	const cereal = await Cereal.create(req.body);
	const beverage = await Beverage.findById(req.params.beverageid);
	cereal.beverage = beverage._id;
	cereal.save();
	beverage.cereal.push(cereal._id);
	beverage.save();
	res.json(cereal);
});

//update route
router.put('/:id', async (req, res) => {
	res.json(
		await Beverage.findByIdAndUpdate(req.params.id, req.body, { new: true })
	);
});

//delete route
router.delete('/:id', async (req, res) => {
	res.json(await Beverage.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
