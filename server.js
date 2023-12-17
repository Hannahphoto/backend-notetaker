const express = require('express');
const htmlRoute = require('./routes/index');
const path = require('path');
const apiRoute = require('./routes/notes');
let db = require('./db/db.json');
const fs = require('fs/promises');
const { error } = require('console');


const app = express();

const PORT = process.env.PORT || 3003;


//Middleware for parsing JSON and urlencoded from data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', apiRoute);
// app.use('/', htmlRoute);
app.use(express.static(path.join(__dirname, 'public')));

function uniqueID(max) {
    return Math.floor(Math.random() * max) + 1;
};

//GET notes 
app.get('/api/notes', (req, res) => {
    res.json(db);
});

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Post notes
app.post('/api/notes', async (req, res) => {
    let note = req.body;
    note['id'] = uniqueID(1000);

    const data = JSON.parse(await fs.readFile('./db/db.json'));
    data.push(note);
    db.push(note);

    try {
        await fs.writeFile('./db/db.json', JSON.stringify(data));
        console.log("post made")
        return res.status(201).json(note)

    } catch (err) {
        console.log(err);
        res.status(500).json("NOT GOOD")
    }
});





// DELETE route for notes
app.delete('/api/notes/:id', async (req, res) => {
    const noteDelete = parseFloat(req.params.id);
    console.log(noteDelete);
    const savedNotes = JSON.parse(await fs.readFile('./db/db.json', 'utf8'));
    console.log(savedNotes)
    db = savedNotes.filter((note) => note.id !== noteDelete);

    try {
        await fs.writeFile('./db/db.json', JSON.stringify(db));
        console.log('Note deleted')
        return res.status(200).json("ok")
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error.' })
    };
});



app.listen(PORT, () =>
    console.log(`App listening at http:localhost:${PORT}`)
);

