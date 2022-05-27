const express = require('express');
const router = express.Router();

const Subscriber = require('../models/subscribers');

// creation of subscriber
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
     name: req.body.name,
     channel: req.body.channel
    })
    try {
       const newSubscriber = await subscriber.save();
       res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// get all subscribers
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (error) {
        res.send(500).json({message: error.message})
    }
})

module.exports = router;