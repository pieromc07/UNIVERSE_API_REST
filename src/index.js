import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/router';
dotenv.config();
const app = express()


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/', router)

const PORT = process.env.PORT || 5000;
app.set('port', PORT);
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});