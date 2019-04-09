const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
    const body = req.body
    console.log(body)
    //TODO : add to database
    if(body.email){
        res.status(200).json({success: true})
    }else{
        res.status(500).json({success: false})
    }
});

module.exports = router