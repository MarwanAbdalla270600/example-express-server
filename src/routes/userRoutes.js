import express from 'express'
import { addUser, deleteUserById, getAllUsers, getUserById } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/users', getAllUsers)

userRouter.get('/user/:id', getUserById)

userRouter.delete('user/:id', deleteUserById)

userRouter.post('/user', addUser)

export default userRouter