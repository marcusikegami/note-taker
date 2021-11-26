const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const notes = require('../../db/db.json');


router.get('/notes', (req, res) => {
    
    
    res.json(notes);
});



router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    notes.push(req.body);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes, null, 2)
    )
    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    // fs.readFile('../../db/db.json', (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    //   });

    // fs.readFile
    console.log('this');
    let id = req.params.id;
    
    delete notes[id];
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes)
    )
    
});

module.exports = router;