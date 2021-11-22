const { Router} = require('express')
const ping = require('./test/ping.routes')
const sendEmail = require('./mail/mail.routes');
const router = Router();

router.use('/', ping)
router.use('/', sendEmail)
module.exports = router;

