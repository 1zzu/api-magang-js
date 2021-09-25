var express = require('express');
var router = express.Router();
var db = require('../koneksi');
let env = require('../env');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', function(req, res, next){
    let form = {
        id: req.body.id,
        subjek: req.body.subjek,
        deskSingkat: req.body.deskSingkat,
        deskripsi: req.body.deskripsi
    };

    let sql = `INSERT INTO pengumuman (id, subjek, deskSingkat, deskripsi) VALUES (?)`;
    let data = [form.id, form.subjek, form.deskSingkat, form.deskripsi];
    db.query(sql, [data], (error, rows) => {
        if(error) res.json({ message: 'samting wong', result: error})

        res.json(form)
    });
});

router.get('/get/:id', function(req, res, next){
    let id = req.params.id;

    let sql = `SELECT * FROM pengumuman WHERE id = ?`;
    db.query(sql, [id], (error, rows) => {
        if(error) res.json({ message: 'samting wong', result: error})

        res.json(rows)
    });
});

router.get('/getall', function(req, res, next){
    let sql = `SELECT * FROM pengumuman`;
    db.query(sql, (error, rows) => {
        if(error) res.json({ message: 'samting wong', result: error})

        res.json(rows)
    });
});

router.delete('/delete/:id', function(req, res, next){
    let id = req.params.id;

    let sql = `DELETE FROM pengumuman WHERE id = ?`;
    db.query(sql, [id], (error, rows) =>{
        if(error) res.json({ message: 'samting wong', result: error})

        res.json(rows)
    });
});

module.exports = router;
