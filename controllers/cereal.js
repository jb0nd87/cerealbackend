const Cereal = require('../models/cereal');
const Beverage = require('../models/beverage');
const { Router } = require('express');
const { findById } = require('../models/cereal')
const router = Router();
const mongoose = require('mongoose')
const toId = mongoose.Types.ObjectId

//get cereal
router.get('/', async (req, res) => {
	res.json(await Cereal.find({}).populate('beverages'));
});

//get beverage
router.get('/beverage', async (req, res) => {
    res.json(await Cereal.find({}))
})

//create cereal
router.post('/', async (req, res) => {
	res.json(await Cereal.create(req.body));
});

//create beverage
router.post('/beverage/:cerealid', async (req, res) => {
    const beverage = await Beverage.create(req.body)
    const cereal = await Cereal.findById(req.params.cerealid)
    beverage.cereal = cereal._id
    beverage.save()
    cereal.beverage.push(beverage._id)
    cereal.save()
    res.json(beverage)
})

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
