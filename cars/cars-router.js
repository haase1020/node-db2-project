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

router.get('/:id', (req,res) => {
    const { id }=req.params
    .get(id)
    .then(car => {
        res.status(200).json(car);
    })
    .catch(err => {
        res.status(500).json({ errorMessage: `Error ${err}`})
    });
});

router.post('/', (req,res) => {
    const carData = req.body;
    db('cars')
    .insert(carData, 'id')
    .then(ids => {
        db('cars')
        .where({ id: ids[0] })
        .then(newCarData => {
            res.status(201).json(newCarData)
        });
    })
    .catch(err => {
        res.status(500).json({ errorMessage: 'Failed in posting data' })
    });
});

router.put('/:id', (req,res) => {
    const  id  = req.params.id
    const updateCar = req.body
    db('cars')
    .where({ id:id })
    .update(updateCar)
    .then(updateCar => {
        res.status(200).json(updateCar)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: `Error ${err}`})
    });
});

router.delete('/:id', (req,res) => {
    const id = req.params.id
    db('cars')
    .where({ id:id })
    .del()
    .then(deleteCar => {
        res.status(201).json(deleteCar)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: `Error $(err)`})
    });
});

module.exports = router;
