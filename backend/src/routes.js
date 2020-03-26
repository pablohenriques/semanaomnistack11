/**
 * Rotas
 *  
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * QUERY Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * ROUTE Params: Parâmetros utilizados para identificar recursos
   * REQUEST Body: Corpo da requisição utilizado para criar ou alterar recursos
   */

   /**
    * SQL: banco de dados relacionais
    * NoSQL: banco de dados não relacionais
    * Comunicação com SGBD: através de Drivers, Query Builder
    */

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//SESSÃO DE LOGIN
routes.post('/sessions', SessionController.create);

//ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//INCIDENTES
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

// LISTA INCIDENTES - Específico de cada ong
routes.get('/profile', ProfileController.index);

module.exports = routes;