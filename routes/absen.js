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
        staff_id: req.body.staff_id,
        status: req.body.status
    };

    let sql = `INSERT INTO absen (id, staff_id, status) VALUES (?)`;
    let data = [form.id, form.staff_id, form.status];
    db.query(sql, [data], (error, rows) => {
        if(error) res.json({ message: 'samting wong', result: error})

        res.json(form)
    });
});

router.get('/get/:staff_id', function(req, res, next){
    let staff_id = req.params.staff_id;

    let sql = `SELECT * FROM absen WHERE staff_id = ?`;
    db.query(sql, [staff_id], (error, rows) => {
        if(error) res.json({ message: 'samting wong', result: error})

        res.json(rows)
    });
});

router.get('/getall', function(req, res, next){
    let sql = `SELECT * FROM absen`;
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
