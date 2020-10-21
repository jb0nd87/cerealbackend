const Cereal = require('../models/cereal');
const Beverage = require('../models/beverage');
const { Router } = require('express');
const { findById } = require('../models/cereal')
const router = Router();
const mongoose = require('mongoose')
const toId = mongoose.Types.ObjectId

//index route cereal
router.get('/', async (req, res) => {
	const cereals = await Cereal.find({});
	res.json({ status: 200, data: cereals });
});
//create cereal
router.post('/', async (req, res) => {
	const cereal = await Cereal.create(req.body);
	res.json({ status: 200, data: cereal });
});

//update route
router.put('/:id', async (req, res) => {
	res.json(await Cereal.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete('/:id', async (req, res) => {
	res.json(await Cereal.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
