const express = require('express');
const router = express.Router();

let i = 1;

router.post('/notif', (req, res) => {
    const io = req.app.get('io');
    io.emit('data', `Hello, this is a notification number ${i}!`);
    res.json({
        message: `Notification number ${i} sent!`
    });
    i++;
});

module.exports = router;
