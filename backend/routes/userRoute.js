const express = require("express");
const {
  signup,
  login,
  createTrip,
  getAllTrips,
  findUsersWithSimilarInterests,
} = require("../controller/userController");
const { isLoggedIn, customRole } = require("../middlewares/user");

const router = express.Router();

// User routes
router.route("/register").post(signup);

router.route("/login").post(login);
router.route("/trips").post(isLoggedIn, createTrip);
router.route("/trips").get(getAllTrips);
router.route("/similarinterest").get(isLoggedIn, findUsersWithSimilarInterests);

module.exports = router;
