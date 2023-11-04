import express from 'express'
import dotenv from 'dotenv'
import connect from './db'
import server from './app'
//import chargeSongs from './src/controllers/chargeSongs';


dotenv.config()

server.use(express.json())// middleware que transforma el req.body en json

const PORT = process.env.PORT
console.log(PORT)

server.get('/celebrate', (_, res) => { // el guion bajo es para reemplazar el req que no se utiliza y marca error la config de typescript
  console.log('As I lay here with you')
  res.send('the shame lies with us!')
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
connect();
//chargeSongs();