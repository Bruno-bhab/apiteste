const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Deu certo!')
})

app.listen(3333, ()=> console.log('server rodando'))