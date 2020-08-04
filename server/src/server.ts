import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  return res.json({
    API: 'Proffy API',
    Version: '0.1v',
    Description: 'Find a class or give a class if you are awesome',
    Author: 'Pedro Henrique',
    Contact: 'https://github.com/ghostdovahkiin'
  })
})

app.listen(3333)