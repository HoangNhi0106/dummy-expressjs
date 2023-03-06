import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const create = async () => {
    const user = await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io',
      },
    })
    console.log(user)
  }

const app = express()
const port = 8080

app.post('/user', (req, res) => {
    create().then(async () => {
        await prisma.$disconnect()
    })
    res.send('POST!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.put('/', (req, res) => {
  res.send('PUT!')
})

app.patch('/', (req, res) => {
  res.send('PATCH!')
})

app.delete('/', (req, res) => {
  res.send('DELETE!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})