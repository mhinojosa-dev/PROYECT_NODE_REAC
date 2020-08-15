//puerto
const PORT = process.env.PORT || 3000;

//60 SEG * 60 MIN * 24 HR * 30 DAY = EN TIEMPO SERIA TOTAL 30 DIAS
const TIME_TOKEN = 60 * 60 * 24 * 30;
const SEED = process.env.SEED || 'este-es-el-seed';
const DATABASE = process.env.DATABASE || 'db_book_store';
const DB_USERNAME = process.env.DB_USERNAME || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_URL = process.env.DB_URL || 'localhost';
const DB_PORT = process.env.DB_PORT || '27017';

const development = {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DATABASE || 'db_book_store',
    host: process.env.DB_URL || 'localhost',
    dialect: process.env.DIALECT || 'mysql'
}
const test = {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DATABASE || 'db_book_store',
    host: process.env.DB_URL || 'localhost',
    dialect: process.env.DIALECT || 'mysql'
}
const production = {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DATABASE || 'db_book_store',
    host: process.env.DB_URL || 'localhost',
    dialect: process.env.DIALECT || 'mysql'
}

module.exports = {
    TIME_TOKEN,
    SEED,
    development,
    test,
    production,
    PORT,
   
}