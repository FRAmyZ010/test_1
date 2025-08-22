const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
const con = require('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/password/:raw',(req,res)=>{
    const raw = req.params.raw;
    bcrypt.hash(raw,10,(err,hash)=>{
        if(err){
            return res.status(500).send('Error creating password!');
        }
        res.send(hash);
    });
});

app.listen(3000,()=>{
    console.log('Server 🤑 is running on port 3000 ✅');
})