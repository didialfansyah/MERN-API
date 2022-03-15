const express = require('express');

const app = express();

app.use(() => {
    console.log('hello server');
    console.log('tahekkk');
})

app.listen(4000)