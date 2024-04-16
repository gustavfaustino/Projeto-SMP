// fazer a importação do express
const express = require('express');
const router = require('./routes/index') // Requisição das rotas


/**
 * Configurações básicas do aplicativ
 *
 *  Vai pegar tudo daqui e gerar em um novo arquivo
 */
const app = express()
app.use('/', router)

app.use(express.json()) // Tratara as requisições de POST como GET.

module.exports = app // exportar para então importar