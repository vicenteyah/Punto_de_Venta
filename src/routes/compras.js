const express = require('express');
const router = express.Router();


const pool = require('../connection/connection');

router.get('/nuevacom',(req, res) =>{
    res.render('links/newPurchase');
});

router.post('/nuevacom',async(req,res) => {
    const {fkUsu, fkPro , fecha , precio, hora} = req.body;
    const newPur = {
        fkUsu,
        fkPro,
        precio,
        fecha,
        hora
    };
    await pool.query('INSERT INTO compras set ?',[newPur]);
    res.send('received');
    console.log(req.body);
});

// router.get('/totalcom',async(req,res)=>{
//     const vercom = await pool.query('SELECT * FROM compras');
//     res.render('links/')
// });
module.exports = router;