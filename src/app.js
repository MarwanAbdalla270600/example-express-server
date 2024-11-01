import express, { response } from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'

dotenv.config()

const app = express()


const port = process.env.PORT
console.log(port)

app.get('/', (req, res) => {
    res.send('Welcome to index page')
})



app.use('/api', userRouter)
app.listen(port, () => {
    console.log(`Sever is running on port ${port}`)
})