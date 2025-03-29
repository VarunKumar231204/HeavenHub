const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

//signup
router.route("/signup")
.get(userController.renderSignupForm)//signup get route
.post(wrapAsync(userController.signup));// signup post route


//login
router.route("/login")
.get(userController.renderLoginForm)//login get route
.post(saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), userController.login);//login post route

//logout 
router.get("/logout", userController.logout);

module.exports = router;