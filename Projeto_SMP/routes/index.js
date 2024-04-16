const express = require('express')

//rotas (quando os servidor for acessado , pra onde ele vai???
const router = express.Router();
router.get('/',(req,res)=>{
    // função anonima, sem nome

    let nome = req.query.nome
    let idade = req.query.idade
    res.send('Olá '+ nome + ', você tem '+ idade+ ' anos');
});

router.get('/sobre',(req,res)=>{
    // função anonima, sem nome
    res.send('Pagina sobre o projeto.');
});

module.exports = router