const { error } = require("console");
const User = require("../models/user");
const cookieToken = require("../utils/cookieToken");
const crypto = require("crypto");

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!email || !name || !password || !phone) {
      return next(new Error("Name, Email, and password is required"));
    }

    // If the files are sent then it will handel that

    const user = await User.create({
      name,
      email,
      password,
      phone,
    });

    cookieToken(user, res);
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // check if the user is giving both
    if (!email || !password) {
      return next(new Error("Please provide email and password"));
    }

    const user = await User.findOne({ email }).select("+password");

    // check if user is in DB
    if (!user) {
      return next(new Error("This user is not in the DB kindely signup"));
    }

    const isPasswordCorrect = await user.isValidatedPassword(password);

    // check if password is correct
    if (!isPasswordCorrect) {
      return next(new Error("Password is incorrect"));
    }

    cookieToken(user, res);
  } catch (err) {
    console.log(err);
  }
};
