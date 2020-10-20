const Cereal = require('../models/cereal');
const { Router } = require('express');
const router = Router();

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

//delete route
router.delete('/:id', async (req, res) => {
	res.json(await Cereal.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
