const { Router} = require('express');
const { ping , sendMail} = require('../../controller/mail/mailController');
const router = Router();



router.get('/', ping);
router.post('/send', sendMail);

module.exports = router;