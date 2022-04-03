const { Router } = require('express');
const ping = Router();


ping.get('/ping', (req, res)=>{
    res.status(200).json({
        message: 'pong'
    })
});

export default ping;