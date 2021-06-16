const mongoose = require('mongoose');
const profile = require('../profile/profiles').profile();

const env_url_senha = process.env.MONGODB_SENHA;
const urlConexao = !env_url_senha ? profile.conexaoBanco.urlConexao : env_url_senha;
mongoose.connect(urlConexao, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Tentando conectar por 5 segundos
    socketTimeoutMS: 45000, // Tempo do sockets aberto 
});

mongoose.connection.on('error', console.error.bind(console, 'Erro de conexão:'));
