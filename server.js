const express = require('express')
const app = express()

//Importar conexion mongoDB

const archivoDB = require('./conexion')

//importación de archivo de rutas y modelo usuario
const rutaproductos =require('./rutas/productos')

//importar body parser 
//obtener de los campos de formulario la información
const bodyparser =require('body-parser')
app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:'true'}))

app.use('/api/productos', rutaproductos)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. corriendo...')
})


//configurar server basico
app.listen(5000, function(){
    console.log('El servidor NODE HappyRabbit está corriendo correctamente')

}) 