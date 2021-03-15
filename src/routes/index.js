const express = require('express')
const router = express.Router()
const db = require('../db')

// routes
router.get('/',(req,res)=>{
  let query = `select * from v_paquetes`
  db.query(query,(err,rows,fields)=>{
      if(!err)
        res.json(rows)
      else
        console.log(err);  
  })
})
router.get('/:id',(req,res)=>{
  let {id} = req.params  
  let query = `CALL sp_paquete(?)`
  db.query(query,[id],(err,rows,fields)=>{
      if(!err)
        res.json(rows[0])
      else
        console.log(err);   
  })
})

router.post('/add',(req,res)=>{
   
  console.log(req.body);
  let query = `CALL sp_paquete(1)`
  db.query(query,(err,rows,fields)=>{
      if(!err)
        res.json(rows)
      else
        console.log(err);  
  })
})


module.exports = router
