const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eSchemaproducto = new mongoose.Schema({
    nombreproductos: String,
    codigoproductos: String,
    descripcion: String,
    idproductos: String,

})
const ModelProducto = mongoose.model('producto', eSchemaproducto)
module.exports = router
/*Ruta de prueba
router.get('/ejemplo',(req,res)=> {
    res.end('saludo carga desde ruta ejemplo')
})*/

//Agregar producto
router.post('/agregarproducto',(req,res)=>{
    const nuevoproducto = new ModelProducto({
        nombreproductos: req.body.nombreproductos,
        codigoproductos:req.body.codigoproductos,
        descripcion: req.body.descripcion,
        idproductos:req.body.idproductos,
    })  
    nuevoproducto.save(function(err){
        if(!err){
            res.send('producto agregado correctamente')
        }else{
            res.send(err)
        }
    })
})


//obtener todos los productos
router.get('/obtenerproductos',(req, res)=>{
    ModelProducto.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//obtener data de usuario
router.post('/obtenerdataproductos',(req, res)=>{
    ModelProducto.find({idproductos:req.body.idproductos}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Agregar producto
router.post('/actualizaproducto',(req,res)=>{
    
    ModelProducto.findOneAndUpdate({idproductos:req.body.idproductos},{
        nombreproductos:req.body.nombreproductos,
        codigoproductos:req.body.codigoproductos,
        descripcion:req.body.descripcion,    
    }, (err) => {
        if(!err){
            res.setDefaultEncoding('usuario actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

