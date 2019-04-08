const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
    const body = req.body
    const username = body.username
    const password = body.password
    //TODO : check with database
    if(username){
        res.status(200).json({authorized: true})
    }else{
        res.status(401).json({authorized: false})
    }
});

module.exports = router