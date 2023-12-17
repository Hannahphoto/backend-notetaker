// const router= require('express').Router();
// const fs = require('fs/promises');




// // GET Route for notes
// function getNotes(){
//     return JSON.parse(fs.readFileSync('../db/db.json'))
// };

// router.get('/notes', (req, res)=>{
//     const readNotes = getNotes();
//     res.json(readNotes);
// }
// );

// const uuid = () => {
//     return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
//   };

// // POST route for notes
// router.post('/notes', (req, res) =>{
//     const readNotes = getNotes();
//     const { title, text } = req.body;
//     if(req.body){
//         const note = {  
//             title: title,
//             text: text,
//             id: uuid(),
//         }
//     }
//     console.info(`${req.method} note received to at note`);
//     console.log(req.body);

//     //what is required in the notes?
//     //if statement ?
//     //append note?
//     //check for error

// });

// // DELETE route for notes
// // router.delete('/notes/:id', (req, res)=>{
// //     // const
// //     readFromFile('.db/db.json')
// //     // .then((data)=> JSON.parse(data))
// //     // .then((json) =>{
// //     //     const result = json.filter((note))
// //     // }
// // }
// // )

// module.exports = router;