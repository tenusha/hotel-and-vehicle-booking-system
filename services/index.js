'use strict'
;
const express = require('express');
const app = express();
const login = require('./routers/login');

app.use(express.json());

app.use(login);

app.listen(3001, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3001');
});