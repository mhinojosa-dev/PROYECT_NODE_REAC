const express = require('express');
const app = express();
const _ = require('lodash');

const Autor = require("../models").Autor;

// POST crear un autor
app.post('/autors', (req, res) => {
    //USO DE PROMESAS
    let body = req.body;
    Autor.create({
        nombre: body.nombre,
        edad: body.edad,
        nacionalidad: body.nacionalidad
    }).then(autor=>{
        res.status(201).json({
            ok:true,
            autor

        })
    }).catch(err => res.status(400).json({
        ok: false,
        message: err
    }));
});
//mostrar autores con paginacion
app.get('/autors', (req, res) => {

    let from = req.query.from || 0;
    from = Number(from);
    let limit = req.query.limit || 5;
    limit = Number(limit);

    //lo filtro con los que estoy retornando de las bd
    let defaultFilters = {
       // state: true
    }

    Autor.findAndCountAll({limit: limit, offset:from, attributes: ['id','nombre', 'edad', 'nacionalidad']})
    .then((count, autors)=>{
        res.json({
            ok:true,
            autors,
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
app.put('/autors/:autorId', (req, res) => {
    let autorId = req.params.autorId;
    let body = _.pick(req.body,['nombre', 'edad', 'nacionalidad']);

    Autor.update(body, {
        where:{
            id:autorId
        }
    }).then(autor=> res.json({
        ok:true,
        autor
    })).catch(err=>res.status(400).json({
        ok:true,
        err
    }));
});

// DELETE eliminar un autor no es necesario
/*app.delete('/autors/:autorId',  (req, res) => {
    let autorId = req.params.autorId;
    let deleteState ={
        state: false
    };
    Autor.update(deleteState, {
        where:{
            id:autorId
        }
    }).then(autor=>{
        if(!autor){
            return res.json.status(400).json({
                ok:false,
                err:{
                    message:'No se a encontrado el autor'
                }
            })
        } 
        res.json({
        ok:true,
        autor
        })
    }).catch(err=>res.status(400).json({
        ok:true,
        err
    }));
});*/

module.exports= app;