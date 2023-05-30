const usersController = {};
const User = require("../models/User");

usersController.getUsers = async (req, res) => {
  const users = await User.find();

  res.json(users);
};

usersController.createUser = async (req, res) => {
  const { userName } = req.body;
  newUser = await new User({
    userName: userName,
  });
  await newUser.save();
  res.json({ message: "Usuario Creado", userName });
};
usersController.getUser = async (req, res) => {
  userFound = await User.findById(req.params.id);
  res.json(userFound);
};

usersController.updateUser = async (req, res) => {
  const { userName } = req.body;
  userFound = await User.findByIdAndUpdate(req.params.id, { userName });
  await userFound.save();
  res.json({ message: "Usuario Actualizado", userFound });
};
usersController.deleteUser = async (req, res) => {
  const { userName } = req.body;
  userFound = await User.findByIdAndDelete(req.params.id);

  res.json({ message: "Usuario Eliminado" });
};
module.exports = usersController;
