const router = require('express').Router();
const fs = require('fs')
let dbjson = require('../db/db.json')

router.get('/notes', (req, res) => {
    dbjson = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    console.log(dbjson)
    res.json(dbjson)
})

router.post("/notes", (req, res) => {
let notetemplate = {
    title: req.body.title,
    text: req.body.text,
    id: Math.floor(Math.random()*100,000)
}
dbjson.push(notetemplate)
fs.writeFileSync("./db/db.json", JSON.stringify(dbjson))
// res.json sends req changes to front end to render on screen
res.json(dbjson)
})
module.exports = router