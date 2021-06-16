const winston = require('winston')
const empty = require('is-empty');
const validaAmostra = require('./valida-amostra');
const RepositorioAmostra = require('../repositorio/repositorio-amostra');
const repositorioAmostra = new RepositorioAmostra();

const criar = async (req, res) => {
    try {
        // verificar autenticacao
        let amostraAnalisada = validaAmostra.toxicologica(req.body);
        let resposta = await repositorioAmostra.novo(amostraAnalisada);
        if(!resposta.error) {
            res.status(201).send(resposta);
        } else {
            res.status(500).send(resposta.error);
        }
    } catch (error) {
        winston.error(__filename + error.message)
        res.status(500).send(error.message);
    }
};

const buscarTodos = async (req, res) => {
    // verificar autenticacao
    let resposta = await repositorioAmostra.buscaTodos();
    if(!resposta.error) {
        if(empty(resposta)) {
            return res.status(404).send();
        }
        res.status(200).send(resposta);
    } else {
        res.status(500).send('Erro ao buscar amostras');
        winston.error(__filename + 'Erro ao buscar amostras');
    }
};

module.exports = {
    criar,
    buscarTodos
};