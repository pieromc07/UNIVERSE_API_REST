import { Router } from 'express';
import ping from './test/ping.routes';
import sendEmail from './mail/mail.routes';
import weatherRouter from './weather/weather.routes';

const router = Router();

router.use('/', ping)
router.use('/', sendEmail)
router.use('/', weatherRouter)


export default router;
