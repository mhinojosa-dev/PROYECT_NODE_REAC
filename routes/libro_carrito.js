const express = require('express');
const app = express();
const _ = require('lodash');


const LIBRO_CARRITO = require("../models").LIBRO_CARRITO;

// POST crear un libro
app.post('/librocarritos', (req, res) => {
    //USO DE PROMESAS
    let body = req.body;
    LIBRO_CARRITO.create({
        libro_id: body.libro_id,
        cart_id: body.cart_id,
        cantidad: body.cantidad,
    }).then(libro_carrito=>{
        res.status(201).json({
            ok:true,
            libro_carrito
        })
    }).catch(err => res.status(400).json({
        ok: false,
        message: err
    }));
});
//mostrar carritos con paginacion
app.get('/librocarritos', (req, res) => {

    let from = req.query.from || 0;
    from = Number(from);
    let limit = req.query.limit || 5;
    limit = Number(limit);

    //lo filtro con los que estoy retornando de las bd
    let defaultFilters = {
       // state: true
    }

    LIBRO_CARRITO.findAndCountAll({
        limit: limit, 
        offset:from, 
        attributes: ['id','libro_id', 'cart_id', 'cantidad']
    }).then((libro_carrito)=>{
        res.json({
            ok:true,
            
            libro_carrito: libro_carrito.rows,
            total:libro_carrito.count
        })
    })
    .catch(err => res.status(400).json({
        //sinmplificar codigo en un arrow function de que devuelve un solo valor
            ok:false,
            message:err
        }));
});
//PUT actualizar un autor
app.put('/librocarritos/:l_bId', (req, res) => {
    let l_bId = req.params.l_bId;
    let body = _.pick(req.body,['libro_id', 'cart_id', 'cantidad']);

    LIBRO_CARRITO.update(body, {
        where:{
            id:l_bId
        }
    }).then(libro_carrito=> res.json({
        ok:true,
        libro_carrito
    })).catch(err=>res.status(400).json({
        ok:true,
        err
    }));
});



module.exports= app;