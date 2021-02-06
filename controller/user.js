const { request, response } = require("express");
const { generateToken } = require("../helpers/generateJwt");
const bcrypt = require("bcrypt");
const User = require("../model/user");
const jwt = require('jsonwebtoken')

const registerUser = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.json({ message: "Email alredy used" });
    }

    user = new User(req.body);

    const salt = bcrypt.genSaltSync();

    user.password = bcrypt.hashSync(password, salt);

    await user.save();
    const token = await generateToken(user.id);


    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Comunicarse con soporte tecnico" });
  }
};

const loginUser = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "Email o password incorrect" });
    }

    const validatePassword = bcrypt.compareSync(password, user.password);

    if (!validatePassword) {
      return res.json({ message: "Email o password incorrect" });
    }

    const token = await generateToken(user.id);

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Comunicarse con soporte tecnico" });
  }
};

const renewToken = async (req = request, res = response) => {
  try {
    const id = req.id;

    const token = await generateToken(id);

    const user = await User.findById(id);

    res.json({
      id : user.id,   
      name : user.name,
      email : user.email,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Comunicarse con soporte tecnico" });
  }
};
module.exports = {
  registerUser,
  loginUser,
  renewToken
};
