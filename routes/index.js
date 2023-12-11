const express = require('express');
const router = express.Router();
const path = require('path');

app.get('/notes', (req,res)=>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

app.get('*', (req, res)=>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

//Import router from notes
// const notesRouter = require('./notes');

// const app = express();

// app.use('/notes', notesRouter);

module.exports = router;

