import { Router} from 'express';
import {sendMail, servipacMail} from '../../modules/mail/mailController';
const sendEmail = Router();


sendEmail.post('/send', sendMail);
sendEmail.post('/servipac/send', servipacMail);

export default sendEmail;