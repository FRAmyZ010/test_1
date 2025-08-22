const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
const con = require('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('1234567890-[p;lkjhgfd');

app.listen(3000,()=>{
    console.log('Server 🤑 is running on port 3000 ✅');
})