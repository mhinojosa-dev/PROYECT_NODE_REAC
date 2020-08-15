const express = require('express');
const app = express();
const _ = require('lodash');

const Carrito = require("../models").Carrito;

// POST crear un carrito
app.post('/carritos', (req, res) => {
    //USO DE PROMESAS
    let body = req.body;
    Carrito.create({
        nit: body.nit,
        name: body.name,

    }).then(carrito=>{
        res.status(201).json({
            ok:true,
            carrito

        })
    }).catch(err => res.status(400).json({
        ok: false,
        message: err
    }));
});
//mostrar carritos con paginacion
app.get('/carritos', (req, res) => {

    let from = req.query.from || 0;
    from = Number(from);
    let limit = req.query.limit || 5;
    limit = Number(limit);

    //lo filtro con los que estoy retornando de las bd
    let defaultFilters = {
       // state: true
    }

    Carrito.findAndCountAll({limit: limit, offset:from, attributes: ['id','name', 'nit']})
    .then((count, carritos)=>{
        res.json({
            ok:true,
            carritos,
            total: count
        })
    })
    .catch(err => res.status(400).json({
        //sinmplificar codigo en un arrow function de que devuelve un solo valor
            ok:false,
            message:err
        }));
});
//PUT actualizar un autor
app.put('/carritos/:carritoId', (req, res) => {
    let carritoId = req.params.carritoId;
    let body = _.pick(req.body,['name', 'nit']);

    Carrito.update(body, {
        where:{
            id:carritoId
        }
    }).then(carrito=> res.json({
        ok:true,
        carrito
    })).catch(err=>res.status(400).json({
        ok:true,
        err
    }));
});



module.exports= app;