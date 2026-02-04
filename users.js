import express  from 'express';
const router = express.Router();
import connect from '../db/connect.js';

//
router.get('/', function(req, res){
    const sql = "select * from users";
    connect.query(sql, function(err, results){
        if (err){
            res.status(500).send('Internal Server Error');
        }
        else{
            res.json(results);
        }
    });
});

router.post('/', function(req, res){
    console.log(req.body);
    const {username} =  req.body;
    const sql = "insert into users (username) values (?)";
    connect.query(sql, [username], function(err, results){
        if (err){
            res.status(500).send('Internal Server Error');
        }
        else{
            res.json({message: 'User created successfully', userId: results.insertId});
        }
    });
})

export default router;