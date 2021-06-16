require('./src/config/bd/mongoose');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./src/config/swagger/swagger-docs');

const basicAuth = require('express-basic-auth');

const rotaAmostraToxicologica = require('./src/rotas/amostra-toxicologica');
const profile = require('./src/config/profile/profiles').profile();

const app = express();

app.use(basicAuth({
    users: { "admin" : "admin" }
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});



app.use(express.json());
app.use(profile.path, rotaAmostraToxicologica);
app.use("/amostra/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;