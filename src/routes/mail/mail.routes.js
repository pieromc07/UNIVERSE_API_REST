const { Router } = require('express');
const { sendMail, servipacMail } = require('../../controller/mail/mailController');
const sendEmail = Router();


sendEmail.post('/send', sendMail);
sendEmail.post('/servipac/send', servipacMail);

module.exports = sendEmail;