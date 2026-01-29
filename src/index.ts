import express from 'express'
import { db } from './db'
// import { db } from './db.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(3000, () => {
  console.log('API rodando na porta 3000')
})

app.post('/movements', (req, res) => {
  // const move = {type: , value:}
  db.movements.push(req.body) 
  res.json({ status: 'ok' })
  console.log(req.body)
  console.log(db.movements)
})

app.get('/db', (req, res) => {
  res.json(db)
      })