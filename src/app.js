import express, { response } from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())

export let users = [
    {
        id: 1,
        firstname: "Mazin",
        lastname: "Abdalla"
      },
      {
        id: 2,
        firstname: "Nikola",
        lastname: "Stankovic"
      }, {
        id: 3,
        firstname: "Dunja",
        lastname: "Nawasreh"
      }, {
        id: 4,
        firstname: "Hamada",
        lastname: "Abdalla"
      },
]


const port = process.env.PORT
console.log(port)

app.get('/', (req, res) => {
    res.send('Welcome to index page')
})



app.use('/api', userRouter)
const server = app.listen(port, () => {
    console.log(`Sever is running on port ${port}`)
})

