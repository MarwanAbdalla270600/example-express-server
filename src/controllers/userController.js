import { UserDbModel } from "../database-schemas/userSchema.js";
import { addUserToDatabase, deleteUserByIdFromDatabase, deleteUserByNameFromDatabase, getAllUsersFromDatabase, getUserByIdFromDatabase, getUserByNameFromDatabase } from "../repository/userRepository.js";

export async function getAllUsers(req, res) {
 const users = await getAllUsersFromDatabase()
 if(users) {
  res.send(users)
 } else {
  res.status(500).send('Users could not be fetched. Internal Server error')
 }
}

export async function getUser(req, res) {
  const userId = req.params.id;
  let user = null
  if (isNaN(userId)) {
    user = await getUserByNameFromDatabase(userId)
  } else {
    user = await getUserByIdFromDatabase(userId)
  }
  if(user) {
    res.send(user)
  } else {
    res.status(404).send(`user with id: ${userId} could not be fetched`)
  }
 
}

export async function addUser(req, res) {
  const user = req.body;
  const responseUser = await addUserToDatabase(user)
  if(responseUser) {
    res.send(responseUser)
  } else {
    res.status(500).send('could not save user')
  }
}

export async function deleteUser(req, res) {
  const userId = req.params.id;
  const user = null
  if (isNaN(userId)) {
    user = await deleteUserByNameFromDatabase(userId)
  } else {
    user = await deleteUserByIdFromDatabase(userId)
  }
  if(user) {
    res.send(user)
  } else {
    res.status(500).send('Deleting user error')
  }
}
