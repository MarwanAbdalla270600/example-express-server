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

export function addUser(req, res) {
    const user = req.body
    users.push(user)
    res.send(user)
}

export function deleteUserById(req, res) {
    const userId = req.params.id
    if(isNaN(userId)) {
        res.status(400).send('Pls enter a Valid id')
    } else {
        res.send(`Delete User with the number ${userId}`)
    }
}