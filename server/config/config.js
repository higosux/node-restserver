//=================
//Puerto
//=============
process.env.PORT = process.env.PORT || 3000;


//================
//Entorno
//==============

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//================
//Vencimiento del Token
//==============
//60 segundos
//60 minutos
//24 horas
//30 dias

process.env.CADUCIDAD_TOKEN = '48h';


//================
//SEED de autentificación
//==============

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//==================
// BASE DE DATOS
//===================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/Cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;


//================
//Google Client ID
//==============

process.env.CLIENT_ID = process.env.CLIENT_ID || "1070261487681-liihat688a6354ictkg7bi5rbevhdvam.apps.googleusercontent.com";