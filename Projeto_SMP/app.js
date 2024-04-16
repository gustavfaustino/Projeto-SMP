// fazer a importação do express
const express = require('express');
const router = require('./routes/index')


/**
 * Configurações básicas do aplicativ
 *
 *  Vai pegar tudo daqui e gerar em um novo arquivo
 */
const app = express()
app.use('/', router)

module.exports = app // exportar para então
// importar