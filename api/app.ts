import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from 'morgan'
import router from './src/routes/index'

dotenv.config()

const server = express()
const FRONT = process.env.FRONT

server.use(cors({ origin: true, credentials: true }))
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(bodyParser.json({ limit: '50mb' }))
server.use(logger('dev'))
server.use(express.json())

//  local
server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', `http://localhost:${FRONT}`)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

//  deploy
// server.use((req,res,next)=>{
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Credentials', 'true')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
//   next()
// })
server.use('/', router)
export default server;
