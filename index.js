const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./Server/Routes/router')

const port = 3000;


app.use(express.json())

app.use('/api', routes)

//CONEXION A MONGO
const mongoConnect = async () => {
    try{
        await mongoose.connect(
            'mongodb+srv://stevensurez:St3v3n.2023@protalento-back.zv7nrws.mongodb.net/?retryWrites=true&w=majority'
        )
        console.log('Se realizo correctamente la conexión con Mongo DB')
    }
    catch(err){
        console.log(err)
        
    }
}
mongoConnect()

app.listen(port, () => {
    console.log(`Servidor esta en ejecucion en http://localhost:${port}`)
})