import express from 'express';
import sqlite3 from 'sqlite3';
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('src'));

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/add',(req,res) =>{
    res.sendFile(path.join(__dirname,'public','add.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
