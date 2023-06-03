const User = require("../models/user");
const Trip = require("../models/trip");
const cookieToken = require("../utils/cookieToken");
const crypto = require("crypto");

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password, phone, interests } = req.body;

    if (!email || !name || !password || !phone) {
      return res
        .status(400)
        .json({ message: "Name, Email, and password are required" });
    }

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // Create a new user
    const user = await User.create({
      name,
      email,
      password,
      phone,
      interests,
    });

    // Send the response with the newly created user
    res.status(201).json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong. Please try again" });
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
    console.log(user);
    cookieToken(user, res);
  } catch (err) {
    console.log(err);
  }
};

exports.createTrip = async (req, res, next) => {
  try {
    const { date, time, member, gender, age, location } = req.body;

    // Check if all required fields are provided
    if (!date || !time || !member || !gender || !age || !location) {
      return next(new Error("Please provide all the required fields"));
    }

    // Create the trip
    const trip = await Trip.create({
      date,
      time,
      member,
      gender,
      age,
      location,
      createdBy: req.user._id,
    });

    console.log(user);
    res.status(201).json({
      success: true,
      trip,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getAllTrips = async (req, res, next) => {
  try {
    const trips = await Trip.find()
      .populate("createdBy", "name email")
      .maxTimeMS(30000);

    res.status(200).json({
      success: true,
      trips,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.findUsersWithSimilarInterests = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const currentUserInterests = currentUser.interests;

    const matchedUsers = await User.find({
      interests: { $in: currentUserInterests },
    });

    res
      .status(200)
      .json({ matchedUsers: matchedUsers.map((user) => user.toObject()) });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error finding users with similar interests" });
  }
};
