// =================================
// Puerto
// =================================


process.env.PORT = process.env.PORT || 3000;

// =================================
// Entorno
// =================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =================================
// Base de Datos
// =================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/impresoras';
} else {
    const USER_ENV = process.env.USER;
    const PASS_ENV = process.env.PASS;
    urlDB = `mongodb+srv://${USER_ENV}:${PASS_ENV}@cafe.wbaqo.mongodb.net/impresoras`;
}

process.env.URLDB = urlDB;