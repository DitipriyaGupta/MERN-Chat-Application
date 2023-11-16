const asyncHandler = require("express-async-handler");
const userDb = require("../models/userModels");

const tokenGeneration = require("../utils/tokenGeneration");
//login handler
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await userDb.findOne({ email });
  const passwordDB = await user.matchPassword(password);
  if (user && passwordDB) {
    res.status(200).json({
      userName: user.userName,
      email: user.email,
      token:tokenGeneration(user._id)
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
//register handler
const userRegister = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  const user = await userDb.findOne({ email });
  if (user) {
    res.status(404);
    throw new Error("User already exists");
  }
  const createUser = await userDb.create({
    userName,
    email,
    password,
  });
  if (createUser) {
    res.status(201).json({
      userName: createUser.userName,
      email: createUser.email,
      token:tokenGeneration(user._id)
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});
module.exports = { userLogin, userRegister };
