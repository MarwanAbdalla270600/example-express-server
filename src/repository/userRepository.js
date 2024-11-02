import { UserDbModel } from "../database-schemas/userSchema.js";


// Retrieve all users
export async function getAllUsersFromDatabase() {
    try {
      return await UserDbModel.find().exec(); // Explicitly execute the query
    } catch (err) {
      console.error(`Error fetching users from the Database: ${err}`);
      return undefined;
    }
  }
  
  // Add a new user
  export async function addUserToDatabase(user) {
    try {
      const newUser = new UserDbModel(user);
      return await newUser.save();
    } catch (err) {
      console.error(`Error adding user to the Database: ${err}`);
      return undefined;
    }
  }
  
  // Delete a user by ID
  export async function deleteUserByIdFromDatabase(id) {
    try {
      return await UserDbModel.findByIdAndDelete(id).exec();
    } catch (err) {
      console.error(`Error deleting user by ID from the Database: ${err}`);
      return undefined;
    }
  }
  
  // Delete a user by name
  export async function deleteUserByNameFromDatabase(username) {
    try {
      return await UserDbModel.findOneAndDelete({ username: username }).exec();
    } catch (err) {
      console.error(`Error deleting user by name from the Database: ${err}`);
      return undefined;
    }
  }
  
  // Get a user by ID
  export async function getUserByIdFromDatabase(id) {
    try {
      return await UserDbModel.findById(id).exec();
    } catch (err) {
      console.error(`Error fetching user by ID from the Database: ${err}`);
      return undefined;
    }
  }
  
  // Get a user by name
  export async function getUserByNameFromDatabase(username) {
    try {
      return await UserDbModel.findOne({ username: username }).exec();
    } catch (err) {
      console.error(`Error fetching user by name from the Database: ${err}`);
      return undefined;
    }
  }