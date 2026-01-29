import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(3000, () => {
  console.log('API rodando na porta 3000')
})

