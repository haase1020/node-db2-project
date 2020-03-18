const express = require('express');
const db = require('../data/connection');
const router = express.Router();

router.get('/', (req,res)=> {
    db('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch(err => {
        res.status(500).json({ errorMessage: 'Problem getting cars' });
    });
});


module.exports = router;
