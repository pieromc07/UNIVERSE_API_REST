import { Router } from 'express';
import { location } from '../../modules/weather/controllers/weatherController';
const weatherRouter = Router();

weatherRouter.post("/weather/test", location);

export default  weatherRouter;