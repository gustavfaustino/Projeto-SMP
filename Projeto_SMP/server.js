const app = require('./app')

require('dotenv').config({path:'variaveis.env'})

app.set('port', process.env.PORT) // Usar uma porta livre, n utilizavel. 8080 n pode
const server = app.listen(app.get('port'),()=>{
    console.log("Servidor rodando na porta: "+ server.address().port)
})

