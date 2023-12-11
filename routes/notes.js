const router= require('express').Router();
const fs = require('fs');

// GET Route for notes
router.get('/notes', (req, res)=>{
    fs.readFromFile('./db/db.json').then((data)=> res.json(JSON.parse(data)));
    
});

// POST route for notes
router.post('/notes', (req, res) =>{
    console.info(`${req.method} note received to at note`);
    console.log(req.note);

    //what is required in the notes?
    //if statement ?
    //append note?
    //check for error

});

// DELETE route for notes
router.delete('/notes/:id', (req, res)=>{
    // const
    readFromFile('.db/db.json')
    // .then((data)=> JSON.parse(data))
    // .then((json) =>{
    //     const result = json.filter((note))
    // }
}
)

module.exports = router;