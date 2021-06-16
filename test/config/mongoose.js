const mongoose = require('mongoose');

module.exports = class Conexao {
    abreConexao(){
        mongoose.connect(global.__MONGO_URI__, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });
    }

    fechaConexao(){
        mongoose.connection.close(); 
    }

}