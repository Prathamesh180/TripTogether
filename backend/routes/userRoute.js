const express = require("express");
const { signup, login } = require("../controller/userController");
const { isLoggedIn, customRole } = require("../middlewares/user");

const router = express.Router();

// User routes
router.route("/register").post(signup);

router.route("/login").post(login);

module.exports = router;
