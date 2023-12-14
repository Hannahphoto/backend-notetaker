const express = require('express');
const htmlRoute = require('./routes/index');
const path = require('path');
const apiRoute = require('./routes/notes');
const db = require('./db/db.json');
const fs = require('fs');


const app = express();

const PORT = process.env.PORT || 3001;


//Middleware for parsing JSON and urlencoded from data.
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// app.use('/api', apiRoute);
// app.use('/', htmlRoute);
app.use(express.static(path.join(__dirname, 'public')));

function uniqueID(max){
    return Math.floor(Math.random() * max) + 1;
};

//GET notes 
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'))
});

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.post('/api/notes', (req, res)=>{
    let note = req.body;
    note['id'] = uniqueID(1000);
    
    fs.readFile('./db/db.json', ( err, res) =>{
        if(err) console.log("Error: ",err);

        let data = JSON.parse(res);
        data.push(note);

        fs.writeFile('./db/db.json', JSON.stringify(data), err => {
            if (err) throw err;
            console.log('Data has been saved');
        })

    })
    res.redirect('/notes');

});

// DELETE route for notes
app.delete('/api/notes/:id', (req, res)=>{
    const noteDelete = req.params.id;
    fs.readFile('./db/db.json')
    .then((data)=> JSON.parse(data))
    .then((json) => {
       const update = json.filter((note) => note.id !==noteDelete);
       return fs.writeToFile('./db/db.json', JSON.stringify(update), err =>{
        if(err) throw err;
        console.log('Note deleted.');
       });
    })

    .catch((err)=>{
        console/log(err);
        res.status(500).json({error: 'Internal Server Error.'})
    });
});



app.listen(PORT, () =>
    console.log(`App listening at http:localhost:${PORT}`)
);

