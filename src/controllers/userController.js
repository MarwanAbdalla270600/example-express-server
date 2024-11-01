import { UserModel } from "../../database/schema.js"
import { users } from "../app.js"

export function getAllUsers(req, res) {
    res.json(users)
}

export function getUserById(req, res) {
    const userId = req.params.id
    if(isNaN(userId)) {
        return res.status(400).send('Pls enter a Valid id')
    } 
    const user = users.find(user => user.id === parseInt(userId))
    console.log(user)
    if(user === undefined) {
        res.status(404).send('User could not be found')
    }
    res.send(user)
}

export async function addUser(req, res) {
    const user = req.body
    const userData = new UserModel(user)
    userData.save().then(success=>console.log('success')).catch(err=>console.log(error))
    users.push(user)
    res.send(user)
}

export function deleteUserById(req, res) {
    const userId = req.params.id
    if(isNaN(userId)) {
        res.status(400).send('Pls enter a Valid id')
    } else {
        const index = users.findIndex(user => user.id === parseInt(userId));
        if (index !== -1) {
           users.splice(index, 1);
           res.send(`User with id ${userId} got deleted`);
        } else {
           res.status(404).send('User not found');
        }
    }
}