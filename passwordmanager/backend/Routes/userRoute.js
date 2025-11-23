const express = require("express");
const userRoute = express.Router();
const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
  getOneUser,
  signIn,
} = require("../Controllers/userController");
userRoute.get("/users", getUsers);
userRoute.get("/users/:id", getOneUser);
userRoute.post("/users", postUser);
userRoute.post("/users/signin", signIn);
userRoute.put("/users/:id", putUser);
userRoute.delete("/users/:id", deleteUser);
module.exports = userRoute;
