import { UserDbModel } from "../database-schemas/userSchema.js";
import { getAllUsersFromDatabase } from "../repository/userRepository.js";

export async function getAllUsers(req, res) {
 const users = await getAllUsersFromDatabase()
 if(users) {
  res.send(users)
 } else {
  res.status(500).send('Users could not be fetched. Internal Server error')
 }
}

export function getUserById(req, res) {
  const userId = req.params.id;
  if (isNaN(userId)) {
    return res.status(400).send("Pls enter a Valid id");
  }
}

export function addUser(req, res) {
  const user = req.body;
  const userData = new UserDbModel(user);
  userData
    .save()
    .then(() => res.send(user))
    .catch(() => res.status(500).send("could not store user"));
}

export function deleteUserById(req, res) {
  const userId = req.params.id;
  if (isNaN(userId)) {
    res.status(400).send("Pls enter a Valid id");
  } else {
  }
}
