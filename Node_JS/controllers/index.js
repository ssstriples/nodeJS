const { Router } = require('express');
const router = Router()

router.use('/admin', require('./admin'));

router.get('/', (req, res) => {
    res.send('hello express');
});

module.exports = router;