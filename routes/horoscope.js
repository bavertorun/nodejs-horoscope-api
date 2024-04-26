const { Router } = require('express');
const { horoscopes,horoscopeDetail } = require('../controller/horoscope');

const router = Router();


router.get('/',horoscopes);
router.get('/:name',horoscopeDetail);

module.exports = router;