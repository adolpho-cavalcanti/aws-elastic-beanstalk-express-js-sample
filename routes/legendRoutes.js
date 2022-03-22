const router = require('express').Router();

const Legend = require('../models/Legend');


router.get('/', async (req, res) => {
    try {
        const legend = await Legend.find();
        res.status(200).json(legend);

    } catch (err) {
        res.status(500).json({ error: err })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const legendId = req.params.id;
        const legend = await Legend.findOne({ _id: legendId });
        if(!legend) {
            res.status(422).json({ message: 'Lenda não encontrada'});
            return;
        }
        res.status(200).json(legend);

    } catch (err) {
        res.status(500).json({ error: err })
    }
});

module.exports = router;