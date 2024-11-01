export function getAllUsers(req, res) {
    res.send('Here are all Users')
}

export function getUserById(req, res) {
    const userId = req.params.id
    if(isNaN(userId)) {
        res.status(400).send('Pls enter a Valid id')
    } else {
        res.send(`Get User with the number: ${userId}`)
    }
}

export function addUser(req, res) {
    res.send('user was added')
}

export function deleteUserById(req, res) {
    const userId = req.params.id
    if(isNaN(userId)) {
        res.status(400).send('Pls enter a Valid id')
    } else {
        res.send(`Delete User with the number ${userId}`)
    }
}