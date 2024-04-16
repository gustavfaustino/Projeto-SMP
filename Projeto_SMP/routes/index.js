const express = require('express')

//rotas (quando os servidor for acessado , pra onde ele vai???
const router = express.Router();
router.get('/',(req,res)=>{

    // Utilizando o req para acessar dados na URL, transformalos em variavel e utilizá-los
    let nome = req.query.nome
    let idade = req.query.idade
    res.send('Olá '+ nome + ', você tem '+ idade+ ' anos');
});

router.get('/sobre',(req,res)=>{
    res.send('Pagina sobre o projeto.');
});

router.get('/posts/:id', (req, res) => {
    let id = req.params.id
    res.send('Id do post '+ id)
})

router.get('/json',(req,res)=>{

    // Utilizando o req para acessar dados na URL, transformalos em variavel e utilizá-los
    let nome = req.query.nome
    let sobrenome = req.query.sobrenome

    res.json({
        nomeCompleto: nome+ ' ' +sobrenome

    })
});

router.get('/json2',(req,res)=>{
    res.json(req.query)
});

module.exports = router