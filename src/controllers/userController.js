import { UserDbModel } from "../../database/userSchema.js";

export function getAllUsers(req, res) {
  UserDbModel.find()
    .then((data) => res.json(data))
    .catch(() => res.status(500).send("Error accured fetching data"));
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
