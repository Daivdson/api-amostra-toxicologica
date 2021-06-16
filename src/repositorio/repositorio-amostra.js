const winston = require('winston')
const AmostraToxicologica = require('../dominio/amostra-toxicologica');

class RepositorioAmostra {
    
    async novo(objNovo) {
        let amostra = new AmostraToxicologica(objNovo);
      
        try {
            let resposta = await amostra.save();
            return resposta;
        } catch (error) {
            winston.error(__filename + ' Erro ao analisar amostra toxicologica ' + error.message);
            return {error: error.message};
        }
    }

    async buscaTodos() {
        try {
            let todos = await AmostraToxicologica.find({});
            return todos;
        } catch (error) {
            winston.error(__filename + ' Erro ao busca todos amostras ' + error.message); 
            return {error: error.message};
        }
    }

}
module.exports = RepositorioAmostra;