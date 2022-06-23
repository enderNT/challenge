import mysql from 'mysql'
import express from 'express'
import 'dotenv/config'

export const app = express()

app.use(express.json())

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_BD,
    password: process.env.DB_PASSWORD
})

app.post('/', async (req, res) => {
    const {
        nombre, segundoNombre, apellidoPaterno,
        apellidoMaterno, fechaDeNacimiento, email,
        telefono
    } = req.body
    if (Object.values(req.body).some(el => !el)) return res.status(400).json({ error: 'All fields required' })

    connection.query('INSERT INTO usuarios SET ?', {
        nombre, segundoNombre, apellidoPaterno,
        apellidoMaterno, fechaDeNacimiento, email,
        telefono
    }, (err, results, fields) => {
        if(err) {
            console.error(err)
            return res.status(500).json({ error: 'algo salio mal' })
        }
        return res.status(201).json({
            nombreCompleto: `${nombre} ${segundoNombre} ${apellidoPaterno} ${apellidoMaterno}`, fechaDeNacimiento, email,
            telefono
        })
    })
})
