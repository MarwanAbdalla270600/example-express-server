import express from 'express'
import { getUser, addUser, deleteUser, getAllUsers } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/users', getAllUsers)

userRouter.get('/user/:id', getUser)

userRouter.delete('/user/:id', deleteUser)

userRouter.post('/user', addUser)

export default userRouter