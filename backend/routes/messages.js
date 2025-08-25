const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.get('/', async (req, res) => {
    const messages = await Message.find().sort({ createdAt: 1 });
    res.json(messages);
});

router.post('/', async (req, res) => {
    const { sender, text } = req.body;
    const message = new Message({ sender, text });
    await message.save();
    res.json(message);
});

module.exports = router;
