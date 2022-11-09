const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('Hello World! TUT TUT FILS DE PUTE'))
app.get('/contact', (req, res) => res.send('Contact ! TUT TUT FILS DE PUTE'))
app.get('/about', (req, res) => res.send('Je suis Peter ! TUT TUT FILS DE PUTE<br> <ul><li>Symfony</li><li>Comics</li></ul>'))
app.get('/test', (req,res) => res.sendFile(__dirname + '/index.html'))


app.get('/calculator', (req,res) => 
    res.sendFile(__dirname + '/calculator.html'))

app.post('/calculator', function(req, res) {
    const total = Number(req.body.num1) + Number(req.body.num2)
    // console.log(req['body'])
    res.send(total.toString())
})

app.get('/imc', (req,res) => 
    res.sendFile(__dirname + '/imc.html'))

app.post('/imc', function(req, res) {
    const total =  Number(req.body.num2) / ((Number(req.body.num1)/100) * (Number(req.body.num1)/100))
    // console.log(req['body'])
    res.send('IMC = ' + total)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))