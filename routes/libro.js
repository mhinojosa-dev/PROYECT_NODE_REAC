const express = require('express');
const app = express();
const _ = require('lodash');


const Libro = require("../models").Libro;

// POST crear un libro
app.post('/libros', (req, res) => {
    //USO DE PROMESAS
    let body = req.body;
    Libro.create({
        titulo: body.titulo,
        descripcion: body.descripcion,
        precio: body.precio,
        autorId: body.autorId,


    }).then(libro=>{
        res.status(201).json({
            ok:true,
            libro
        })
    }).catch(err => res.status(400).json({
        ok: false,
        message: err
    }));
});
//mostrar carritos con paginacion
app.get('/libros', (req, res) => {

    let from = req.query.from || 0;
    from = Number(from);
    let limit = req.query.limit || 5;
    limit = Number(limit);

    //lo filtro con los que estoy retornando de las bd
    let defaultFilters = {
       // state: true
    }

    Libro.findAndCountAll({
        limit: limit, 
        offset:from, 
        attributes: ['id','autorId', 'titulo', 'descripcion', 'precio']
    }).then((libros)=>{
        res.json({
            ok:true,
            
            libros: libros.rows,
            total:libros.count
        })
    })
    .catch(err => res.status(400).json({
        //sinmplificar codigo en un arrow function de que devuelve un solo valor
            ok:false,
            message:err
        }));
});
//PUT actualizar un autor
app.put('/libros/:libroId', (req, res) => {
    let libroId = req.params.libroId;
    let body = _.pick(req.body,['autorId', 'titulo', 'descripcion', 'precio']);

    Libro.update(body, {
        where:{
            id:libroId
        }
    }).then(libro=> res.json({
        ok:true,
        libro
    })).catch(err=>res.status(400).json({
        ok:true,
        err
    }));
});



module.exports= app;