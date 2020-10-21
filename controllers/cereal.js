const Cereal = require('../models/cereal');
// const Beverage = require('../models/beverage');
const { Router } = require('express');
// const { findById } = require('../models/cereal')
const router = Router();
const mongoose = require('mongoose')
// const toId = mongoose.Types.ObjectId

// router.get('/seed', async (req, res) => {
//     res.json(await Cereal.insertMany(seedData))
// })

//index route
router.get('/', async (req, res) => {
	res.json(await Cereal.find({}));
});

//create route
router.post('/', async (req, res) => {
	res.json(await Cereal.create(req.body));
});

//update route
router.put('/:id', async (req, res) => {
	res.json(await Cereal.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

// router.put(':cerealId/addBeverage/:beverageId', async (req, res) => {
//     console.log('put method', req.params)
//     const beverages = await Beverages.findById(req.params.beverageId)
//     const cereal = await Cereal.findByIdAndUpdate(req.params.cerealId, {
//         $push: {beverage: beverage.id},
//         new: true,
//     })
//     res.json({
//         status: 200,
//         data: cereal,
//     })
// })

//delete route
router.delete('/:id', async (req, res) => {
	res.json(await Cereal.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
