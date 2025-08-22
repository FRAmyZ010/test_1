const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
const con = require('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('tu');


app.listen(3000,()=>{
    console.log('Server 🤑 is running on port 3000 ✅');
})