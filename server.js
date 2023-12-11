const express = require('express');
const htmlRoute = require('./routes/index');
const path = require('path');
const apiRoute = require('./routes/notes');

const app = express();

const PORT = process.env.PORT || 3001;


//Middleware for parsing JSON and urlencoded from data.
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', apiRoute);
app.use('/', htmlRoute);
app.use(express.static('public'));

//GET notes 

// app.use('/api', api)



// app.get('api/notes', (req, res)=>
//     res.json(req, 'body')
// );

app.post('/api/notes', (req, res)=>
    res.sendFile(path.join(id, '/public/index.html'))
);

app.delete('/api/notes/:notes', (req, res) =>
    res.sendFile(path.join(id, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http:localhost:${PORT}`)
);

