var express = require('express');
var router = express.Router();
var db = require('../koneksi');
let env = require('../env');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/get/:id', function(req, res, next){
    let id = req.params.id;

    let sql = `SELECT * FROM staff WHERE id = ?`;
    db.query(sql, [id], (error, rows) => {
        if(error) res.json({ message: 'samting wong', result: error})

        res.json(rows)
    });
});

router.get('/getall', function(req, res, next){
    let sql = `SELECT * FROM staff`;
    db.query(sql, (error, rows) => {
        if(error) res.json({ message: 'samting wong', result: error})

        res.json(rows)
    });
});

router.delete('/delete/:id', function(req, res, next){
    let id = req.params.id;

    let sql = `DELETE FROM absen WHERE id = ?`;
    db.query(sql, [id], (error, rows) =>{
        if(error) res.json({ message: 'samting wong', result: error})

        res.json(rows)
    });
});

module.exports = router;
