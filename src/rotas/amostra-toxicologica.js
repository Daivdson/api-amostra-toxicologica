const express = require('express');
const router = new express.Router();
const controlador = require('../controlador/controlador-amostra-toxicologica');
var path = '/toxicologica';

/**
 * @swagger
 * /amostra/api/toxicologica:
 *  post:
 *    tags: 
 *      - "Toxicológica"
 *    produces:
 *       - application/json
 *    description: Valida amostra toxicologica
 *    parameters:
 *      - in: body
 *        name: body
 *    responses:
 *      '201':
 *        description: Retorno com sucesso
 *    security:
 *      - bearerAuth: []
*/
router.post(path, controlador.criar);

/**
 * @swagger
 * /amostra/api/toxicologica:
 *  get:
 *    tags: 
 *      - "Toxicológica"
 *    description: Amostra toxicológica
 *    produces:
 *       - application/json
 *    responses:
 *      '200':
 *        description: Retorno com sucesso
 *    security:
 *      - bearerAuth: []
*/
router.get(path, controlador.buscarTodos);


module.exports = router;