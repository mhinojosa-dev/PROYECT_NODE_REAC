const mongoose = require('mongoose');
const q = require('q');
const {
    DB_URL,
    DB_USERNAME,
    DB_PASSWORD,
    DB_PORT,
    DATABASE
} = require('../config/config');

//q permite mejorar las promesas a usar mongoose
//moongose es un orm para modelar la bd en mongoDB
mongoose.Promise = q.Promise;
let db;
//si existe el usuario y existe el pass y si el pass y user son iguales a vacio
if (!DB_USERNAME && !DB_PASSWORD && !((DB_PASSWORD === DB_USERNAME) === '')) {
    //'mongodb://localhost:27017/blog-api'
    //`mongodb://${DB_URL}:${DB_PORT}/${DATABASE}`
    //'mongodb://'+DB_URL+':'+DB_PORT+'/'+DATABASE'
    db = mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DATABASE}`, {

        useNewUrlParser: true,
        useUnifiedTopology: true
    });

} else {
    db = mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DATABASE}`, {
        user: DB_USERNAME,
        pass: DB_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

}


module.exports = db;